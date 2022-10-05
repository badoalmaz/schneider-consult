const date = new Date(),
  monday = 1,
  targetDate = new Date(),
  delta = monday - date.getDay();
if (delta >= 0) {
  targetDate.setDate(date.getDate() + delta);
} else {
  targetDate.setDate(date.getDate() + 7 + delta);
}
const day = targetDate.getDate();
const month = targetDate.getMonth() + 1;
const year = targetDate.getFullYear().toLocaleString().slice(3);

document.getElementById("target-date").innerText = `${day}.${month}.${year}`;
