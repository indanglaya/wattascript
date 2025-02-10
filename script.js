        function formatNumber(number) {
            return parseFloat(number).toLocaleString("en-US");
        }
        function generateText() {
            const name = document.getElementById("name").value;
            const series = document.getElementById("series").value;
            const manufacturer = document.getElementById("manufacturer").value;
            const poPrice = formatNumber(document.getElementById("po_price").value);
            const dp = formatNumber(document.getElementById("dp").value);
            const srp = formatNumber(document.getElementById("srp").value);
            const reservationDueDate = document.getElementById("deadline").value;
            const releaseDate = document.getElementById("eta").value;
            if (!name || !manufacturer || !poPrice || !dp || !srp || !reservationDueDate || !releaseDate) {
                alert("Please fill in all required fields.");
                return;
            }
            const output = `PRE-ORDER - ${manufacturer} - ${series ? series + " - " : ""}${name}\n\n` +
                           `Pre-order Price: ₱ ${poPrice}\n` +
                           `Downpayment: ₱ ${dp}\n` +
                           `Retail Price: ₱ ${srp}\n\n` +
                           `Pre-order Deadline: ${reservationDueDate}\n` +
                           `ETA: ${releaseDate}\n\n` +
                           `*ETA may change without prior notice\n` +
                           `*100% Authentic\n` +
                           `*We accept Bank Transfers, Gcash, Maya, and Credit/Debit Cards\n\n` +
                           `Pre-Order Guidelines: https://wattatoys.com/pages/pre-order-guidelines\n` +
                           `FAQs: https://wattatoys.com/pages/faqs\n` +
                           `How to order: https://wattatoys.com/pages/how-to-order\n` +
                           `Join our broadcast channel for updates: https://m.me/j/Abafji4EEYsZ2EPw/\n\n` +
                           `Send us a PM if interested 😉\n\n` +
                           `#Wattatoys #PreOrder #Hobbies #Collectibles #Plush #actionfigures`;
            document.getElementById("outputText").innerText = output;
        }
        function clearFields() {
            document.querySelectorAll("input").forEach(input => input.value = "");
            document.getElementById("outputText").innerText = "Your generated script will appear here.";
        }
        function copyToClipboard() {
            navigator.clipboard.writeText(document.getElementById("outputText").innerText)
                .then(() => alert("Copied to clipboard!"))
                .catch(() => alert("Failed to copy text."));
        }
		 function changeTheme() {
            const theme = document.getElementById("themeSelector").value;
            document.getElementById("themeStylesheet").href = theme;
        }
