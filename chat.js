export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { message } = req.body;

    // OPTION A: Simple Logic (Default)
    const reply = `You said: "${message}". To get real AI answers, connect an OpenAI API key in this file.`;

    // OPTION B: OpenAI Integration (Uncomment if you have a key)
    /*
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }]
        })
    });
    const data = await response.json();
    const reply = data.choices[0].message.content;
    */

    return res.status(200).json({ reply });
}