// Set your Cloudinary cloud name and unsigned upload preset below:
const CLOUD_NAME = "<YOUR_CLOUD_NAME>";
const UPLOAD_PRESET = "<YOUR_UNSIGNED_PRESET>";

export async function uploadToCloudinary(file) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    const res = await fetch(url, {
        method: "POST",
        body: formData,
    });
    if (!res.ok) throw new Error("Cloudinary upload failed");
    const data = await res.json();
    return data.secure_url;
} 