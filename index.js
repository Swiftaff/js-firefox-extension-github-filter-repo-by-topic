(function () {
    if (window.hasRun) {
        return;
    }
    window.hasRun = true;

    let all_topic_tags = document.querySelectorAll(".topic-tag");

    addTopicDropdown();

    document.body.style.border = "5px solid red";
})();

function addTopicDropdown() {
    //generate a new 'Topic' dropdown like the others...
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

    //create necessary dom elements
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
    let closeButtonSVGPath = createCloseButtonSVGPath();
    let selectMenuList = createSelectMenuList();
    let label = createLabel();
    let input = createInput();
    let checkButtonSVG = createCheckButtonSVG();
    let checkButtonSVGPath = createCheckButtonSVGPath();
    let ItemText = createItemText();

    //create the necessary hierarchy of dom elements
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
    closeButtonSVG.appendChild(closeButtonSVGPath);
    selectModal.appendChild(selectMenuList);
    selectMenuList.appendChild(label);
    label.appendChild(input);
    label.appendChild(checkButtonSVG);
    checkButtonSVG.appendChild(checkButtonSVGPath);
    label.appendChild(ItemText);

    //insert dropdown before first dropdown
    let first_details = document.getElementById("type-options");
    let parent_of_details = first_details.parentNode;
    parent_of_details.insertBefore(details, first_details);
}

function createDetails() {
    let el = document.createElement("details");
    el.setAttribute("id", "filter-by-topics");
    el.className = "details-reset details-overlay position-relative mr-2";
    return el;
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
    let text = document.createTextNode("Select type");
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
    let el = document.createElement("svg");
    el.className = "octicon octicon-x";
    el.setAttribute("aria-label", "Close menu");
    el.setAttribute("viewBox", "0 0 16 16");
    el.setAttribute("version", "1.1");
    el.setAttribute("width", "16");
    el.setAttribute("height", "16");
    el.setAttribute("role", "img");
    return el;
}

function createCloseButtonSVGPath() {
    let el = document.createElement("path");
    el.setAttribute("fill-rule", "evenodd");
    el.setAttribute(
        "d",
        "M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
    );
    return el;
}

function createSelectMenuList() {
    let el = document.createElement("div");
    el.className = "SelectMenu-list";
    return el;
}

function createLabel() {
    let el = document.createElement("label");
    el.className = "SelectMenu-item";
    el.setAttribute("role", "menuitemradio");
    el.setAttribute("aria-checked", "true");
    el.setAttribute("tabindex", "0");
    return el;
}

function createInput() {
    let el = document.createElement("input");
    el.className = "SelectMenu-item";
    el.setAttribute("type", "radio");
    el.setAttribute("name", "type");
    el.setAttribute("id", "topic_");
    el.setAttribute("value", "");
    el.setAttribute("data-autosubmit", "true");
    el.setAttribute("checked", "checked");
    el.setAttribute("hidden", "hidden");
    return el;
}

function createCheckButtonSVG() {
    let el = document.createElement("svg");
    el.className = "octicon octicon-check";
    el.setAttribute("aria-label", "Close menu");
    el.setAttribute("viewBox", "0 0 16 16");
    el.setAttribute("version", "1.1");
    el.setAttribute("width", "16");
    el.setAttribute("height", "16");
    el.setAttribute("role", "img");
    return el;
}

function createCheckButtonSVGPath() {
    let el = document.createElement("path");
    el.setAttribute("fill-rule", "evenodd");
    el.setAttribute(
        "d",
        "M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
    );
    return el;
}

function createItemText() {
    let el = document.createElement("span");
    el.className = "text-normal";
    el.setAttribute("data-menu-button-text", "");
    let text = document.createTextNode("All");
    el.appendChild(text);
    return el;
}

/*
<label class="SelectMenu-item" role="menuitemradio" aria-checked="true" tabindex="0">
  <input type="radio" name="type" id="type_" value="" data-autosubmit="true" checked="checked" hidden="hidden">
  <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
  <span class="text-normal" data-menu-button-text="">All</span>
</label>
*/
