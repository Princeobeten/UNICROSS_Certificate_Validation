function downloadCertificate() {
    var certificateImageURL = "img/certificate.jpg";

    var downloadLink = document.createElement("a");
    downloadLink.href = certificateImageURL;
    downloadLink.download = "certificate.jpg";
    downloadLink.click();
}

function downloadAsPDF() {
    var pdf = new jsPDF();
    var certificateDetails = {
        id: "005988",
        name: "Theresa Ngob Ndum",
        issueDate: "September 30, 2016"
    };
    pdf.text("Certificate ID: " + certificateDetails.id, 20, 20);
    pdf.text("User Full Name: " + certificateDetails.name, 20, 30);
    pdf.text("Issue Date: " + certificateDetails.issueDate, 20, 40);

    // Save the PDF and trigger the download
    pdf.save("certificate.pdf");
}


function printCertificate() {
    window.print();
}


function printCertificate() {
    window.print();
}


// var certificatePageURL = "https://yourwebsite.com/certificate-verification";
// var qrcode = new QRCode(document.getElementById("qrcode-container"), {
//    text: certificatePageURL,
//    width: 128,
//    height: 128,
// });