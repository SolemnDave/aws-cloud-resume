const counter = document.querySelector("#counter-number");

async function updateCounter() {
    try {
        const response = await fetch("https://5aateyuci3hyrc7yxh2xblggnu0xradr.lambda-url.us-east-1.on.aws/");

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();
        counter.innerHTML = `Views: ${data}`;
    } catch (error) {
        console.error(error);
    }
}

updateCounter();

