import Debug "mo:base/Debug";
import Array "mo:base/Array";
import Principal "mo:base/Principal";

actor class TaleBlox() = this {
  type Story = {
    id : Text;
    title : Text;
    initialAuthor : Principal;
    pageCount : Nat;
    pages : [Page];
    owner : Principal;
  };

  type Page = {
    id : Nat;
    author : Principal;
    prompt : Text;
    content : Text;
    metadataUrl : Text;
  };

  type NFT = {
    storyIndex : Nat;
  };

  // let Author = Authors.Author;
  var stories : [Story] = [];
  var nfts : [NFT] = [];

  // Helper function to update the story
  func updateStory(storyId : Text, updatedStory : Story) {
    stories := Array.map<Story, Story>(
      stories,
      func(story : Story) : Story {
        if (story.id == storyId) {
          return updatedStory;
        } else {
          return story;
        };
      },
    );
  };

  public func createStory(
    id : Text,
    title : Text,
    prompt : Text,
    content : Text,
    metadataUrl : Text,
  ) : async () {
    let author = Principal.fromActor(this);
    let newStory : Story = {
      id = id;
      title = title;
      initialAuthor = author;
      pageCount = 1;
      pages = Array.tabulate<Page>(
        1,
        func(_ : Nat) : Page {
          {
            id = 1;
            author = author;
            prompt = prompt;
            content = content;
            metadataUrl = metadataUrl;
          };
        },
      );
      isNFTMinted = false;
      owner = author;
    };
    stories := Array.tabulate(
      Array.size(stories) + 1,
      func(i : Nat) : Story {
        if (i == Array.size(stories)) {
          return newStory;
        } else {
          return stories[i];
        };
      },
    );
  };

  public func contributeToStory(
    storyId : Text,
    prompt : Text,
    content : Text,
    metadataUrl : Text,
  ) : async () {
    let author = Principal.fromActor(this);
    let existingStory = Array.find<Story>(
      stories,
      func(story : Story) : Bool { story.id == storyId },
    );
    switch (existingStory) {
      case null {
        Debug.print("Story not found.");
        return;
      };
      case (?foundStory) {
        let newPage : Page = {
          id = Array.size(foundStory.pages) + 1;
          author = author;
          prompt = prompt;
          content = content;
          metadataUrl = metadataUrl;
        };
        let updatedPages = Array.tabulate(
          Array.size(foundStory.pages) + 1,
          func(i : Nat) : Page {
            if (i == Array.size(foundStory.pages)) {
              return newPage;
            } else {
              return foundStory.pages[i];
            };
          },
        );
        let updatedStory : Story = {
          id = foundStory.id;
          title = foundStory.title;
          initialAuthor = foundStory.initialAuthor;
          pageCount = foundStory.pageCount + 1;
          pages = updatedPages;
          owner = foundStory.owner;
        };
        updateStory(storyId, updatedStory);
      };
    };
  };

  public query func getAllStories() : async [Story] {
    return stories;
  };
};
