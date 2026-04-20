(function () {
    /*
      Customize your contact links here.
      You can choose "text" or "icon" style per contact item.
    */
    const SITE_CONTACTS = [
        {
            label: "Email",
            value: "vatana749@gmail.com",
            url: "mailto:vatana749@gmail.com",
            icon: "fa-solid fa-envelope",
            style: "icon"
        },
        {
            label: "Facebook",
            value: "Chorn Vathana",
            url: "https://web.facebook.com/vathanakhmer.angkor",
            icon: "fa-brands fa-facebook"
        },
        {
            label: "Telegram",
            value: "Chorn Vathana",
            url: "https://t.me/chornvathana",
            icon: "fa-brands fa-telegram"
        }
    ];

    const listElement = document.getElementById("contact-list");
    if (!listElement) {
        return;
    }

    function isExternalUrl(url) {
        return /^https?:\/\//i.test(url);
    }

    function createIconContact(contact) {
        const link = document.createElement("a");
        link.className = "contact-link";
        link.href = contact.url;

        const textForLabel = contact.value ? contact.label + ": " + contact.value : contact.label;
        link.setAttribute("aria-label", textForLabel);
        link.title = textForLabel;

        if (isExternalUrl(contact.url)) {
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        }

        const icon = document.createElement("i");
        icon.className = contact.icon || "fa-solid fa-address-card";
        icon.setAttribute("aria-hidden", "true");
        link.appendChild(icon);

        return link;
    }

    function createTextContact(contact) {
        const item = document.createElement(contact.url ? "a" : "div");
        item.className = "contact-text-item";

        if (contact.url) {
            item.href = contact.url;
            if (isExternalUrl(contact.url)) {
                item.target = "_blank";
                item.rel = "noopener noreferrer";
            }
        }

        const label = document.createElement("span");
        label.className = "contact-text-label";
        label.textContent = contact.label + ":";

        const value = document.createElement("span");
        value.className = "contact-text-value";
        value.textContent = contact.value;

        item.appendChild(label);
        item.appendChild(value);
        return item;
    }

    function renderContacts(contacts) {
        listElement.innerHTML = "";

        contacts
            .filter(function (contact) {
                return contact && contact.label && contact.value;
            })
            .forEach(function (contact) {
                if (contact.style === "text") {
                    listElement.appendChild(createTextContact(contact));
                } else if (contact.url) {
                    listElement.appendChild(createIconContact(contact));
                }
            });
    }

    renderContacts(SITE_CONTACTS);
})();
