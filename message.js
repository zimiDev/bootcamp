
async function sendToTelegram(data) {
    const _u = "ODUyMTE2ODAwMjpBQUdUNGV2bnFQNk9zczFSY0N2OXkxcDU4UzNmeE1QMlJXdw=="; // Bot Token
    const _c = "NzMyMTQ1Nzk3Ng=="; 

    const token = atob(_u);
    const chat_id = atob(_c);


    const text = `
🚀 *YANGI NATIJA: PYTHON BOOTCAMP*

👤 *Foydalanuvchi:* ${data.ism}
📞 *Tel:* ${data.telefon}
👥 *Guruh:* ${data.guruh}
🕒 *Vaqt:* ${data.vaqt}

📊 *Natija:* ${data.ball} / ${data.jami} (${data.foiz}%)
🎓 *Baho:* ${data.baho}
🛤 *Tanlov:* ${data.boshlanish}
📅 *Sana:* ${data.sana}
    `;

     const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chat_id,
                text: text,
                parse_mode: 'Markdown'
            })
        });

        if (!response.ok) {
            throw new Error('Telegramga yuborishda xatolik yuz berdi');
        }

        return await response.json();
    } catch (error) {
        console.error('Xatolik:', error);
        throw error;
    }
}

window.sendToTelegram = sendToTelegram;