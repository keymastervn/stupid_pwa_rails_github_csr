// Only CSR

document.addEventListener("DOMContentLoaded", () => {
  console.log("wtf");
  fetchData("open");
  issueSelectHandler();
});

const buildTableRow = (issue, issueTable) => {
  const { number, title, user, state, created_at } = issue;
  const tbody = issueTable.tBodies[0];
  const newRow = tbody.insertRow(tbody.rows.length);
  newRow.innerHTML = `
    <tr>
      <td>${number}</td>
      <td>${title}</td>
      <td>${user.login}</td>
      <td>${state}</td>
      <td>${created_at}</td>
      <td><button type="button" class="btn btn-info" onclick="window.App.displayIssue(${number})">Show</button></td>
    </tr>
  `;
};

const fetchData = (status) => {
  const issueTable = document.getElementById("issue-table");

  if (issueTable) {
    cleanTbody(issueTable);
    fetch(
      `https://api.github.com/repos/nnluukhtn/employment_bot/issues?state=${status}`
    ).then(function (response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      response.json().then((data) => {
        data.forEach((issue) => buildTableRow(issue, issueTable));
      });
    });
  }
};

const issueSelectHandler = () => {
  const issueSelect = document.getElementById("issue-select");

  if (issueSelect) {
    issueSelect.addEventListener("change", () => {
      fetchData(issueSelect.value);
    });
  }
};

const cleanTbody = (issueTable) => {
  const tb = issueTable.tBodies[0];
  while (tb.rows.length > 0) {
    tb.deleteRow(0);
  }
};

window.App = {};
const App = window.App;

const displayIssue = (number) => {
  fetch(
    `https://api.github.com/repos/nnluukhtn/employment_bot/issues/${number}`
  ).then(function (response) {
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }

    response.json().then((issue) => {
      alert(JSON.stringify(issue));
    });
  });
};
window.App.displayIssue = displayIssue;
