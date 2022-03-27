"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    function req(e) {
        e.preventDefault();
        
        let formData = new FormData(form);
        formData.append("id", Math.random());

        let obj = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

    	 getResource("http://localhost:3000/people",obj)
            .then(data => createCards(data))
            .catch(err => console.error(err));
    }

    form.addEventListener("submit", (e) => req(e), {"once": true});


    async function getResource(url, data) {
        const res = await fetch(`${url}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }
});