# Employee Payslip Management System

A simple web-based Payslip Generator developed using HTML, CSS, and JavaScript. This application allows users to enter employee details, calculate salary components, generate a payslip, and download it as a PDF.

---

## Features

- Employee information input
- Automatic gross salary calculation
- Overtime pay calculation
- Bonus and deduction support
- Net salary calculation
- Generate and display payslip instantly
- Download payslip as a PDF
- User-friendly interface

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- jsPDF Library

---

## Project Structure

```
Payslip-Generator/
│── index.html
│── styles.css
│── script.js
└── README.md
```

---

## How to Run the Project

1. Download or clone the repository.

```bash
git clone https://github.com/your-username/Payslip-Generator.git
```

2. Open the project folder.

3. Double-click **index.html**

or

Open the folder in **Visual Studio Code** and run using the **Live Server** extension.

---

## How It Works

1. Enter employee details.
2. Enter regular working hours.
3. Enter overtime hours.
4. Enter hourly wage.
5. Enter deductions and bonuses.
6. Click **Generate Payslip**.
7. The application calculates:
   - Gross Salary
   - Net Salary
8. Click **Download Payslip** to save the payslip as a PDF.

---

## Salary Calculation

### Gross Salary

```
Gross Salary = (Regular Hours × Hourly Rate)
             + (Overtime Hours × Hourly Rate × 1.5)
```

### Net Salary

```
Net Pay = Gross Salary + Bonuses − Deductions
```

---

## Screenshots

Add screenshots of the application here.

Example:

- Home Page
- Generated Payslip
- Downloaded PDF

---

## Future Enhancements

- Employee database integration
- Login authentication
- Monthly payslip history
- Tax calculation automation
- Company logo support
- Email payslip feature
- Dark mode
- Print functionality

---

## Dependencies

- jsPDF (CDN)

```
https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js
```

---

## Browser Compatibility

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Brave

---

## Author

**Santhiya V**

Computer Science Engineering Student

---

## License

This project is developed for educational purposes.
Payslip

