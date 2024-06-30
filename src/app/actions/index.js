"use server";

export async function submitForm(formData) {
  try {
    const response = await fetch("https://superblue.studio/api/emails/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.API_AUTH_KEY,
      },
      body: JSON.stringify(formData),
    });
    if (response?.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log(response);
      return { error: "Error submitting form" };
    }
  } catch (error) {
    return { error };
  }
}
