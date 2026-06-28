import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const analyzeResumeService = async (resume) => {
  try {
    const prompt = `You are an expert resume reviewer with 10+ years of experience in tech hiring.

    Analyse the resume below and return a JSON object with exactly these fields:

    - overallScore: a number from 0 to 100 rating the resume quality
    - summary: a 2-3 sentence overall assessment of the resume
    - strengths: an array of strings, each describing something done well
    - weaknesses: an array of strings, each describing a gap or problem
    - suggestions: an array of strings, each being a specific actionable improvement 
    - skills: an array of strings listing all technical skills detected in the resume
    - experienceLevel: one of "fresher", "junior", "mid", "senior"

    Resume:
    ${resume}

    Rules:
    - Respond with ONLY valid JSON, nothing else
    - No markdown, no backticks, no explanation outside the JSON
    - Be honest and specific, not generic
    - Each strength, weakness, and suggestion should be 1-2 sentences max`

    const result = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "You are an expert resume reviewer with 10+ years of experience in tech hiring. Always respond in valid JSON only, no extra text, no markdown.",
        },
        { role: "user", content: prompt },
      ],
      response_format: { type: "json_object" },
      temperature:0
    });

    return JSON.parse(result.choices[0].message.content);
  } catch (error) {
    console.log("Error:", error);
  }
};
