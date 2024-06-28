/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import Logo from "./Logo";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Function to extract links matching the specified pattern from script tags
    const extractLinksFromScripts = () => {
      const scripts = document.querySelectorAll<HTMLScriptElement>(
        'script[type="text/javascript"]'
      );
      const s = scripts[0].textContent || "";
      const a = s.split('"');
      const kwikLink = a.find((e) => e.startsWith("https://kwik"));
      console.log(kwikLink);
      if (kwikLink) {
        // Redirect to the extracted URL
        window.location.href = kwikLink;
        return; // Exit loop if a valid URL is found
      }
    };
    const currentUrl = window.location.href;
    if (currentUrl.startsWith("https://pahe.win")) {
      extractLinksFromScripts();
    }
  }, []);

  useEffect(() => {
    // Function to simulate click on the download button
    const clickDownloadButton = () => {
      // Find the download button in the DOM
      const currentUrl = window.location.href;
      let a = currentUrl.split("/");
      const index = a.indexOf("f");
      a[index] = "d";
      const downloadUrl = a.join("/");

      const downloadButton = document.querySelector<HTMLButtonElement>(
        `form[action="${downloadUrl}"] button[type="submit"]`
      );

      // Simulate click on the button if found
      if (downloadButton) {
        downloadButton.click();
      } else {
        console.error("Download button not found in the DOM.");
      }
    };

    // Check if the current URL matches the specific pattern
    const currentUrl = window.location.href;
    if (currentUrl.startsWith("https://kwik.si/")) {
      // Call the clickDownloadButton function only for specific URLs
      clickDownloadButton();
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="App">
    </div>
  );
}

export default App;
