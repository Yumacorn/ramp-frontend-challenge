const stick = document.getElementById("stick");

export default function Decipher(props) {
  return (
    <div>
      <p id="stick"></p>
      <Typewriter message={props.challengeUrl} />
    </div>
  );
}

const Typewriter = (props) => {
  const arrTemp = [];
  for (let i in props.message) {
    arrTemp.push([props.message[i]].toString());
  }

  // const listItems = arrTemp.map((x) => <li>{x}</li>);
  RetrieveFlag(props.message);
};

async function RetrieveFlag(url) {
  const myRequest = new Request(url);
  fetch(myRequest)
    .then((response) => response.text())
    .then((text) => {
      console.log(text);
      if (stick) {
        stick.innerHTML = text;
      }
    });
  console.log(url);
}
