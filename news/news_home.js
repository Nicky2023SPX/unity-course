alert(window.parent.location.href + "news.txt");

FetchJSON();

async function FetchJSON() {
  const json = await fetch(window.parent.location.href + "news.txt");
  alert(json);
}