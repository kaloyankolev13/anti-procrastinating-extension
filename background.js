chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed, blocking the predefined websites.");

  // Update the rules
  // chrome.declarativeNetRequest.updateDynamicRules({
  //   addRules: [
  //     {
  //       id: 1,
  //       priority: 1,
  //       action: { type: "block" },
  //       condition: { urlFilter: "facebook.com", resourceTypes: ["main_frame"] }
  //     },
  //     {
  //       id: 2,
  //       priority: 1,
  //       action: { type: "block" },
  //       condition: { urlFilter: "instagram.com", resourceTypes: ["main_frame"] }
  //     },
  //     {
  //       id: 3,
  //       priority: 1,
  //       action: { type: "block" },
  //       condition: { urlFilter: "twitter.com", resourceTypes: ["main_frame"] }
  //     },
  //     {
  //       id: 4,
  //       priority: 1,
  //       action: { type: "block" },
  //       condition: { urlFilter: "youtube.com", resourceTypes: ["main_frame"] }
  //     }
  //   ],
  //   removeRuleIds: [1, 2, 3, 4]
  // }, () => {
  //   if (chrome.runtime.lastError) {
  //     console.error(chrome.runtime.lastError);
  //   } else {
  //     console.log("Rules have been set up.");
  //   }
  // });
});
