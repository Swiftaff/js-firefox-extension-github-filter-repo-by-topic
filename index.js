(function () {
    if (window.hasRun) return;
    window.hasRun = true;
    window.firstMutationDetected = false;
    //addTopicDropdownToPage();
    //window.addEventListener("DOMContentLoaded", function () {
    console.log("loaded");
    addTopicDropdownToPage();
    checkForMutations();
    //});
})();

function addTopicDropdownToPage() {
    let { all_topic_tags, all_repositories } = getTopicsAndRepos();

    //generate a new 'Topic' dropdown like the other dropdowns, such as Type...
    //pasted here in case it changes in future
    /*
    <details class="details-reset details-overlay position-relative mr-2" id="type-options" open="">
      <summary class="btn" aria-haspopup="menu" role="button">
        <i>Type:</i>
        <span data-menu-button="">
          All
        </span>
        <span class="dropdown-caret"></span>
      </summary>

      <details-menu class="SelectMenu right-md-0" role="menu">
        <div class="SelectMenu-modal">
          <header class="SelectMenu-header">
            <span class="SelectMenu-title">Select type</span>
            <button class="SelectMenu-closeButton" type="button" data-toggle-for="type-options"><svg aria-label="Close menu" class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg></button>
          </header>
          <div class="SelectMenu-list">
              <label class="SelectMenu-item" role="menuitemradio" aria-checked="true" tabindex="0">
                <input type="radio" name="type" id="type_" value="" data-autosubmit="true" checked="checked" hidden="hidden">
                <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
                <span class="text-normal" data-menu-button-text="">All</span>
              </label>
              <label class="SelectMenu-item" role="menuitemradio" aria-checked="false" tabindex="0">
                <input type="radio" name="type" id="type_public" value="public" data-autosubmit="true" hidden="hidden">
                <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
                <span class="text-normal" data-menu-button-text="">Public</span>
              </label>
              <label class="SelectMenu-item" role="menuitemradio" aria-checked="false" tabindex="0">
                <input type="radio" name="type" id="type_private" value="private" data-autosubmit="true" hidden="hidden">
                <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
                <span class="text-normal" data-menu-button-text="">Private</span>
              </label>
              <label class="SelectMenu-item" role="menuitemradio" aria-checked="false" tabindex="0">
                <input type="radio" name="type" id="type_source" value="source" data-autosubmit="true" hidden="hidden">
                <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
                <span class="text-normal" data-menu-button-text="">Sources</span>
              </label>
              <label class="SelectMenu-item" role="menuitemradio" aria-checked="false" tabindex="0">
                <input type="radio" name="type" id="type_fork" value="fork" data-autosubmit="true" hidden="hidden">
                <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
                <span class="text-normal" data-menu-button-text="">Forks</span>
              </label>
              <label class="SelectMenu-item" role="menuitemradio" aria-checked="false" tabindex="0">
                <input type="radio" name="type" id="type_archived" value="archived" data-autosubmit="true" hidden="hidden">
                <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
                <span class="text-normal" data-menu-button-text="">Archived</span>
              </label>
              <label class="SelectMenu-item" role="menuitemradio" aria-checked="false" tabindex="0">
                <input type="radio" name="type" id="type_mirror" value="mirror" data-autosubmit="true" hidden="hidden">
                <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
                <span class="text-normal" data-menu-button-text="">Mirrors</span>
              </label>
          </div>
        </div>
      </details-menu>
    </details>
    */

    //create necessary main dom elements
    let details = createDetails();
    let summary = createSummary();
    let i = createI();
    let span1 = createSpan1();
    let span2 = createSpan2();
    let detailsMenu = createDetailsMenu();
    let selectModal = createSelectModal();
    let header = createHeader();
    let selectMenuTitle = createSelectMenuTitle();
    let closeButton = createCloseButton();
    let closeButtonSVG = createCloseButtonSVG();
    let selectMenuList = createSelectMenuList();
    let img = createIcon();

    //create the necessary main hierarchy of dom elements
    details.appendChild(summary);
    summary.appendChild(i);
    summary.appendChild(span1);
    summary.appendChild(span2);
    details.appendChild(detailsMenu);
    detailsMenu.appendChild(selectModal);
    selectModal.appendChild(header);
    header.appendChild(selectMenuTitle);
    header.appendChild(closeButton);
    closeButton.appendChild(closeButtonSVG);
    selectModal.appendChild(selectMenuList);

    //loop over repos, and create dom elements for list
    all_topic_tags.map((topic) => {
        let label = createLabel(topic, all_repositories);
        //let input = createInput();
        let checkButtonSVG = createCheckButtonSVG();
        let itemText = createItemText(topic);

        selectMenuList.appendChild(label);
        //label.appendChild(input);
        label.appendChild(checkButtonSVG);
        label.appendChild(itemText);
    });

    //insert dropdown before first dropdown
    let first_details = document.getElementById("type-options");
    let parent_of_details = first_details.parentNode;
    parent_of_details.insertBefore(details, first_details);

    //display icon last - as a basic visual indicator that the code has loaded correctly
    i.prepend(img);
}

function getTopicsAndRepos() {
    //create array of all repos on the page as {node, href, text, topics}
    let all_repositories = [...document.querySelectorAll("a[itemprop='name codeRepository']")]
        .map((a) => ({
            //get the parent Li of the repo link, so you can show hide it later with the filter
            repo: a,
            li: a.parentNode.parentNode.parentNode.parentNode,
            href: a.href,
            text: a.text.replace(/\s+/g, " ").trim(),
            topics: [
                ...a.parentNode.parentNode.parentNode.parentNode.querySelectorAll("a[data-octo-click='topic_click']"),
            ].map((t) => t.text),
        }))
        .sort((a, b) => a.text.localeCompare(b.text));

    //create array of all topics on the page
    let all_topic_tags = [...document.querySelectorAll("a[data-octo-click='topic_click']")].map((a) => ({
        text: a.text,
        repositories: all_repositories.filter((r) => r.topics.includes(a.text)),
    }));

    //& remove duplicates, and sort
    let comparison = [];
    all_topic_tags = all_topic_tags
        .filter((t) => {
            if (!comparison.includes(t.text)) {
                comparison.push(t.text);
                return true;
            } else {
                return false;
            }
        })
        .sort((a, b) => a.text.localeCompare(b.text));

    //& add first All item
    all_topic_tags.unshift({ text: "All", repositories: all_repositories });
    return { all_topic_tags, all_repositories };
}

function createDetails() {
    let el = document.createElement("details");
    el.setAttribute("id", "filter-by-topics");
    el.className = "details-reset details-overlay position-relative mr-2";
    el.addEventListener("mouseup", (_) => toggleDropdown());
    return el;
}

function toggleDropdown() {
    let el = document.getElementById("filter-by-topics");
    let a = el.hasAttribute("open");
    if (a) {
        el.setAttribute("open", "open");
    } else {
        el.removeAttribute("open");
    }
}

function createSummary() {
    let el = document.createElement("summary");
    el.setAttribute("aria-haspopup", "menu");
    el.setAttribute("role", "button");
    el.className = "btn";
    return el;
}

function createI() {
    let el = document.createElement("i");
    let text = document.createTextNode("Topic: ");
    el.appendChild(text);
    return el;
}

function createSpan1() {
    let el = document.createElement("span");
    el.setAttribute("data-menu-button", "");
    let text = document.createTextNode("All");
    el.appendChild(text);
    return el;
}

function createSpan2() {
    let el = document.createElement("span");
    el.className = "dropdown-caret";
    return el;
}

function createDetailsMenu() {
    let el = document.createElement("details-menu");
    el.setAttribute("role", "menu");
    el.setAttribute("id", "filterbytopicmenu");
    el.className = "SelectMenu right-md-0";
    return el;
}

function createSelectModal() {
    let el = document.createElement("div");
    el.className = "SelectMenu-modal";
    return el;
}

function createHeader() {
    let el = document.createElement("header");
    el.className = "SelectMenu-header";
    return el;
}

function createSelectMenuTitle() {
    let el = document.createElement("span");
    el.className = "SelectMenu-title";
    let text = document.createTextNode("Select topic on this page");
    el.appendChild(text);
    return el;
}

function createCloseButton() {
    let el = document.createElement("button");
    el.className = "SelectMenu-closeButton";
    el.setAttribute("type", "button");
    el.setAttribute("data-toggle-for", "filter-by-topics");
    return el;
}

function createCloseButtonSVG() {
    let html = `<svg version="1.1" class="octicon octicon-x" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    aria-label="Close menu" width="16"  height="16" role="img" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"/>
    </svg>`;
    var wrapper = document.createElement("div");
    wrapper.innerHTML = html;
    let el = wrapper.firstChild;
    return el;
}

function createSelectMenuList() {
    let el = document.createElement("div");
    el.className = "SelectMenu-list";
    return el;
}

function createLabel(topic, all_repositories) {
    let el = document.createElement("label");
    el.className = "SelectMenu-item";
    el.setAttribute("role", "menuitemradio");
    el.setAttribute("aria-checked", "true");
    el.setAttribute("tabindex", "0");
    el.addEventListener("mouseover", (e) => clickToFilter(e, topic, all_repositories));
    return el;
}

function clickToFilter(e, topic, all_repositories) {
    //only display check mark for current selection
    let all_checks = [...document.querySelectorAll(".filter-by-topic-check")];
    all_checks.map((c) => c.classList.add("height0"));
    let just_this_check = [];
    if (e && e.target && e.target.className === "text-normal") {
        just_this_check = [...e.target.parentNode.querySelectorAll(".filter-by-topic-check")];
    } else {
        just_this_check = [...e.target.querySelectorAll(".filter-by-topic-check")];
    }
    just_this_check.map((c) => c.classList.remove("height0"));

    //only display relevant repositories - the whole point of this extension!
    all_repositories.map((r) => r.li.setAttribute("hidden", "hidden"));
    topic.repositories.map((r) => r.li.removeAttribute("hidden"));
}

function createInput() {
    let el = document.createElement("input");
    el.className = "SelectMenu-item";
    el.setAttribute("type", "radio");
    el.setAttribute("name", "type");
    el.setAttribute("id", "topic_");
    el.setAttribute("value", "");
    el.setAttribute("data-autosubmit", "false");
    el.setAttribute("checked", "checked");
    el.setAttribute("hidden", "hidden");
    return el;
}

function createCheckButtonSVG() {
    let html = `<svg version="1.1" class="height0 filter-by-topic-check octicon octicon-check" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    aria-label="Close menu" width="16"  height="16" role="img" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/>
    </svg>`;
    var wrapper = document.createElement("div");
    wrapper.innerHTML = html;
    let el = wrapper.firstChild;
    return el;
}

function createItemText(topic) {
    let el = document.createElement("span");
    el.className = "text-normal";
    el.setAttribute("data-menu-button-text", "");
    let text = document.createTextNode(topic.text + " (" + topic.repositories.length + ")");
    el.appendChild(text);
    return el;
}

function createIcon() {
    let url = browser.runtime.getURL("icons/github-filter-repo-by-topic-96.png");
    let el = document.createElement("img");
    el.setAttribute("src", url);
    el.style = "height: 20px;padding: 0 4px 0 0; margin-bottom: -5px;";
    return el;
}

function checkForMutations() {
    setTimeout(() => {
        const targetNode = document.querySelector("#user-repositories-list");
        const observerOptions = {
            childList: true,
            //attributes: true,

            // Omit (or set to false) to observe only changes to the parent node
            subtree: true,
        };

        const observer = new MutationObserver(callback);
        observer.observe(targetNode, observerOptions);
    }, 2000);
}

function callback(mutationList, observer) {
    if (window.firstMutationDetected === false) {
        removeFilterButtonIfExists();
        spinnerCreate();
        window.firstMutationDetected = true;

        setTimeout(() => {
            spinnerRemove();
            addTopicDropdownToPage();
            window.firstMutationDetected = false;
        }, 2000);
    }
}

function spinnerCreate() {
    const spinner = document.querySelector("#filter-by-topic-spinner");
    if (!spinner) {
        let html = `<svg id="filter-by-topic-spinner" style="-webkit-animation: spin 4s infinite linear;"
    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    aria-hidden="true" focusable="false" width="0.97em"  height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1664 1728">
      <path d="M462 1394q0 53-37.5 90.5T334 1522q-52 0-90-38t-38-90q0-53 37.5-90.5T334 1266t90.5 37.5T462 1394zm498 206q0 53-37.5 90.5T832 1728t-90.5-37.5T704 1600t37.5-90.5T832 1472t90.5 37.5T960 1600zM256 896q0 53-37.5 90.5T128 1024t-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5T1202 1394t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5zM494 398q0 66-47 113t-113 47t-113-47t-47-113t47-113t113-47t113 47t47 113zm1170 498q0 53-37.5 90.5T1536 1024t-90.5-37.5T1408 896t37.5-90.5T1536 768t90.5 37.5T1664 896zm-640-704q0 80-56 136t-136 56t-136-56t-56-136t56-136T832 0t136 56t56 136zm530 206q0 93-66 158.5T1330 622q-93 0-158.5-65.5T1106 398q0-92 65.5-158t158.5-66q92 0 158 66t66 158z" fill="#626262"/>
    </svg>`;
        var wrapper = document.createElement("div");
        wrapper.innerHTML = html;
        let el = wrapper.firstChild;

        let first_details = document.getElementById("type-options");
        let parent_of_details = first_details.parentNode;
        parent_of_details.insertBefore(el, first_details);
    }
}

function spinnerRemove() {
    const spinner = document.querySelector("#filter-by-topic-spinner");
    if (spinner) {
        spinner.parentNode.removeChild(spinner);
    }
}

function removeFilterButtonIfExists() {
    const previousTopicButton = document.querySelector("#filter-by-topics");
    if (previousTopicButton) {
        previousTopicButton.parentNode.removeChild(previousTopicButton);
    }
}
