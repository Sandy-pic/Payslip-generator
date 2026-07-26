document.getElementById('payslipForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const employeeName = document.getElementById('employeeName').value;
    const employeeID = document.getElementById('employeeID').value;
    const department = document.getElementById('department').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const regularHours = parseFloat(document.getElementById('regularHours').value);
    const overtimeHours = parseFloat(document.getElementById('overtimeHours').value);
    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
    const deductions = parseFloat(document.getElementById('deductions').value);
    const bonuses = parseFloat(document.getElementById('bonuses').value);

    // Calculate gross salary
    const grossSalary = (regularHours * hourlyRate) + (overtimeHours * hourlyRate * 1.5);
    const netPay = grossSalary + bonuses - deductions;

    // Generate payslip output
    const payslipOutput = `
        <h2>Payslip</h2>
        <p><strong>Employee Name:</strong> ${employeeName}</p>
        <p><strong>Employee ID:</strong> ${employeeID}</p>
        <p><strong>Department:</strong> ${department}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Total Regular Hours Worked:</strong> ${regularHours}</p>
        <p><strong>Total Overtime Hours Worked:</strong> ${overtimeHours}</p>
        <p><strong>Gross Salary:</strong> $${grossSalary.toFixed(2)}</p>
        <p><strong>Deductions:</strong> $${deductions.toFixed(2)}</p>
        <p><strong>Bonuses:</strong> $${bonuses.toFixed(2)}</p>
        <p><strong>Net Pay:</strong> $${netPay.toFixed(2)}</p>
    `;

    document.getElementById('payslipOutput').innerHTML = payslipOutput;
    document.getElementById('downloadBtn').style.display = 'block';

    // Generate PDF
    document.getElementById('downloadBtn').onclick = function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.setFontSize(12);
        doc.text("Payslip", 20, 20);
        doc.text(`Employee Name: ${employeeName}`, 20, 30);
        doc.text(`Employee ID: ${employeeID}`, 20, 40);
        doc.text(`Department: ${department}`, 20, 50);
        doc.text(`Job Title: ${jobTitle}`, 20, 60);
        doc.text(`Total Regular Hours Worked: ${regularHours}`, 20, 70);
        doc.text(`Total Overtime Hours Worked: ${overtimeHours}`, 20, 80);
        doc.text(`Gross Salary: $${grossSalary.toFixed(2)}`, 20, 90);
        doc.text(`Deductions: $${deductions.toFixed(2)}`, 20, 100);
        doc.text(`Bonuses: $${bonuses.toFixed(2)}`, 20, 110);
        doc.text(`Net Pay: $${netPay.toFixed(2)}`, 20, 120);

        doc.save(`${employeeName}_payslip.pdf`);
    };
});
