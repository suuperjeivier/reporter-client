'use client'
import axios from "axios";

function descargarPdf() {
    return axios.get(`http://localhost:3001/reports/pdf`, {
        responseType: 'arraybuffer',
        headers: {
            'Accept': 'application/pdf'
        }
    }).then((response) => {
        const blob = new Blob([response.data], {type: 'application/pdf'})
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = `your-file-name.pdf`
        link.click();
    })
        .catch(err => {});
}

function MyButton() {
    return (
        <button disabled={false} onClick={() => descargarPdf()}>
            Im a button
        </button>
    );
}
export const fetchUsers = async () => {

    const response = await axios.get(`http://localhost:3001/users/all`);
    return response.data;
}

export default function ReportClient() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    );
}