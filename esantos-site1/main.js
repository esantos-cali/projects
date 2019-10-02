function toggleDropdown() {
  let navbarToggle = document.getElementById("es-navbar-toggle");
  if (navbarToggle.className === 'es-topnav') {
    navbarToggle.className += ' responsive';
  } else {
    navbarToggle.className = 'es-topnav';
  }
}

var bodyPremier = "This was a project for Premier Coordination.<br>"

var bodyNISS = "This was a project for OSH to set up new SKUs with vendor and item-specific information<br>"

var bodyReturns = "Project for Returns, Exchanges, and Adjustments";

var bodyCredit = "Receive, transform, and send credit request messages from POS to the credit provider; then send the response back to the original POS device.";

var bodyLanguages = "Java HTML/CSS Javascript C#<br>Perl SQL C Shell<br>Informix 4GL, SQL, ESQL C<br>VB6 VB.Net"

var bodyTools = "Linux Windows Unix<br>MS Visual Studio, VS Code<br>vi Brackets"

var bodyCSR = "Customer Comes First<br>Retail Sales Floor<br>Cash Register<br>Help Desk / Call Center<br>"

var bodyDesign = "Clean and clear code<br>Business Requirements<br>Code Design Specifications<br>Change Control"

var bodyExpOSH =
  "<b>Dec 1999 - Nov 2018: Programmer Analyst</b><br>" +
  "Designed new software solutions for store back-office, POS, and Corporate systems, working alongside business partners of all levels. Developed new applications for front-end and back-end, and performed enhancements and troubleshooting/debugging on existing applications using Perl, SQL, 4GL, C, Shell, and VB.Net.<br><br>" +
  "<li>Streamlined the core IT business processes by implementing a new software solution to replace and consolidate legacy systems for replenishment, inventory planning, and accounting.</li>" +
  "<li>Designed and developed a system for simplifying the interface of new store products and update of existing products.</li>" +
  "<li>Redesigned the customer return system processes to simplify, enrich the features, and allow for flexibility in policy adherence.</li>" +
  "<li>Developed interfaces for real-time credit/debit card, gift card, and electronic check processing.</li>" +
  "<li>Implemented system overhauls to comply with PCI standards for credit card processing and storage.</li>" +
  "<li>Created code modules to simplify and standardize commonly-used code routines for logging, user-tracking, and reporting.</li>" +
  "<li>Designed and managed the development of a customer loyalty program.</li>" +
  "<li>Designed and developed several private-label credit card programs.</li>" +
  "<li>Designed and developed a system to manage employee background checks.</li>" +
  "<li>Designed a system to alert and track customer purchases requiring offsite pickup/delivery.</li>" +
  "<li>Scouted and trained new software developers.</li><br>" +
  "<b>Dec 1993 - Dec 1999: Systems Support Specialist</b><br>" +
  "Assisted store and corporate users, providing help and troubleshooting for Store POS systems, back-office systems, payroll systems, PC’s, and other questions and issues.  Set up and maintained hardware for Linux/Unix systems, printers, monitors, and peripherals.<br>" +
  "<li>Call Center phone support for all systems and applications for store locations and corporate office.</li>" +
  "<li>Setup and replacement of back-office system with new Unix systems at 60+ California stores.</li>" +
  "<li>Setup and replacement of POS (cash register) systems at 60+ locations.</li>" +
  "<br>" +
  "<b>Jan 1991 - Dec 1993: Sales Floor and Receiving Clerk</b><br>" +
  "<li>Learned and embraced legendary customer service</li>" +
  "<li>Operated cash register</li>" +
  "<li>Worked sales floor in various departments</li>" +
  "<li>Received goods, checked in and priced merchandise, shipped out defectives</li>"

var bodyExpPremier =
  "<b>Oct 2018 - Mar 2019: IT Specialist</b><br>" +
  "Set up and manage a database system to track library inventory. Maintain users, security access, sites, locations, and other tables. Configure mobile devices to submit relevant asset information into the database. Monitor and troubleshoot the inventory process, provide reporting and analytics.<br>" +
  "<li>Archive and Inventory of 4K+ materials at law library of Santa Clara University.</li>" +
  "<li>Inventory of 10K+ newspaper and other materials at library storage warehouse of Stanford University.</li>"

$('#esModal').on('show.bs.modal', function (event) {
  var link = $(event.relatedTarget) // Button that triggered the modal
  var modalTitle = link.data('title') // Extract info from data-* attributes
  var modalBody = link.data('body') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)

  if (modalBody == "test1") {
    modalBody = "This is test numero one."
  }

  switch (modalBody) {
    case "EXP_OSH":
      modalBody = bodyExpOSH;
      break;
    case "EXP_PREM":
      modalBody = bodyExpPremier;
      break;

    case "LANGUAGES":
      modalBody = bodyLanguages;
      break;
    case "TOOLS":
      modalBody = bodyTools;
      break;
    case "CSR":
      modalBody = bodyCSR;
      break;
    case "DESIGN":
      modalBody = bodyDesign;
      break;
    case "NISS":
      modalBody = bodyNISS;
      break;
    case "PREM":
      modalBody = bodyPremier;
      break;
    case "RETURNS":
      modalBody = bodyReturns;
      break;
    case "CREDIT":
      modalBody = bodyCredit;
      break;
  }

  modal.find('.modal-title').text(modalTitle);
  modal.find('.modal-body').html(modalBody);
})
