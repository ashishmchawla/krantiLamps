import axios from "axios";

export async function recordEntry(name, email, message) {
    var bodyFormData = new FormData();
    bodyFormData.append("name", name);
    bodyFormData.append("email", email);
    bodyFormData.append("message", message);

    try {
        const entryRecorded = await axios.post(
            "https://www.krantilamps.com/form_response.php",
            bodyFormData
        );
        console.log(entryRecorded);
    } catch (error) {
        console.log(error);
        return false;
    }
}
