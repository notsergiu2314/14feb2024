const rng = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const imageTag = (src, alt) => `<img src="${src}" alt="${alt}" />`;

const gifsrcs = ["https://media.tenor.com/FVgd8GToSE8AAAAM/lovefromkitty-cutehearts.gif","https://media.tenor.com/81hXUT90eWoAAAAM/cute-cat.gif","https://media.tenor.com/YDRDcvFIlFcAAAAM/sunakook-gifs.gif","https://media.tenor.com/n-vVxPSyZwkAAAAM/wink-cat.gif", "https://media.tenor.com/CgGf-l5pQWcAAAAM/cat-heart-eyes-yoonmilkers.gif","https://media1.tenor.com/m/5yh3QvAIQosAAAAd/cat-heart.gif"];
const gif = gifsrcs[rng(0, gifsrcs.length - 1)];

const h1 = document.createElement('h1');
h1.innerText = 'Will you be my Valentine?';
h1.style.textAlign = 'center';
h1.style.marginTop = '20px';

const img = document.createElement('img');
img.src = gif;
const container = document.getElementsByClassName('container')[0];

container.appendChild(h1);
container.appendChild(img);

const container2 = document.createElement('div');
container2.style.display = 'flex';
container2.style.justifyContent = 'center';
container.appendChild(container2);

const form = document.createElement('form');
form.style.marginTop = '20px';
container2.appendChild(form);

const inputYes = document.createElement('input');
inputYes.type = 'submit';
inputYes.name = 'response';
inputYes.value = 'Yes';
inputYes.style.marginRight = '20px';
inputYes.style.height = '50px';
inputYes.style.width = '80px';
inputYes.style.color = 'black';
inputYes.style.cursor = 'pointer';
form.appendChild(inputYes);

const inputNo = document.createElement('input');
inputNo.type = 'submit';
inputNo.name = 'response';
inputNo.value = 'No';
inputNo.style.height = '30px';
inputNo.style.width = '50px';
inputNo.style.color = 'black';
inputNo.style.border = 'none';
inputNo.style.cursor = 'pointer';
form.appendChild(inputNo);

const para = document.createElement('p');
para.innerText = 'Last chance to change your mind!';
para.style.textAlign = 'center';
para.style.fontFamily = 'Arial, sans-serif';
para.style.fontSize = '20px';
para.style.fontWeight = 'bold';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const response = e.submitter.value;
    if (response === 'Yes') {
        img.src = 'https://media.tenor.com/GnvFA5bJ-dUAAAAM/mcqueen.gif';
        inputNo.style.display = 'none';
        inputYes.style.display = 'none';
        h1.innerText = 'kacheaw 😎';
    } else {
        inputNo.style.display = 'none';
        h1.innerText = 'Bruh';
        inputYes.remove();
        form.remove();
        container.appendChild(para);
        container.appendChild(form);
        inputYes.style.height = '200px';
        inputYes.style.width = '500px';
        inputYes.style.fontSize = '60px';
        inputYes.value = 'YES!';
        form.appendChild(inputYes);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            img.src = 'https://media.tenor.com/GnvFA5bJ-dUAAAAM/mcqueen.gif';
            inputNo.style.display = 'none';
            inputYes.style.display = 'none';
            h1.innerText = 'kacheaw 😎';
            para.innerText = 'You made the right choice! :)';
        });
        img.src = 'https://media.tenor.com/JQZPRf0YTicAAAAM/emoji-in-distress-emoji-sad.gif';

    }
}
);