let lista = document.querySelector('.lista-adicionados');
let divResultados = document.querySelector('.resultados-encontrados');
let array = new Array();
let searchArray = new Array();

let masculino = document.querySelector('#masc');
let feminino = document.querySelector('#fem');
let soma = document.querySelector('#sum_idade');
let media = document.querySelector('#med_idade');

async function getNames() {
  await fetch(
    'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo'
  )
    .then((response) => response.json())
    .then((data) => {
      data.results.map((index) => {
        array.push({
          name: index.name.first + index.name.last,
          picture: index.picture.thumbnail,
          gender: index.gender,
          age: index.dob.age,
        });
      });
    });
}
getNames();

let button = document.querySelector('#submit-name');
let search = document.querySelector('#search');

button.addEventListener('click', function () {
  console.log(array[0]);
});

search.addEventListener('keyup', function (event) {
  let soma_idades = 0;
  let soma_masculino = 0;
  let soma_feminino = 0;
  let count1 = 0;
  let contm = 0;
  let contf = 0;

  divResultados.innerHTML = '';
  masculino.innerHTML = '';
  feminino.innerHTML = '';
  soma.innerHTML = '';
  media.innerHTML = '';

  array.map((registro) => {
    if (registro.name.includes(event.target.value)) {
      soma_idades += registro.age;
      count1 += 1;

      if (registro.gender == 'female') {
        contf += 1;
      } else {
        contm += 1;
      }

      //registro.gender == 'female'
      // ? (soma_feminino += registro.soma_feminino)
      // : (soma_masculino += registro.soma_masculino);

      let img = document.createElement('img');
      let li = document.createElement('li');
      let p = document.createElement('p');

      masculino.innerHTML = contm;
      feminino.innerHTML = contf;
      soma.innerHTML = soma_idades;
      media.innerHTML = (soma_idades / count1).toFixed(2);

      img.src = registro.picture;
      img.classList.add('img-profile');

      img.classList.add('align');

      p.innerHTML = registro.name + ', ' + registro.age;
      li.append(img);
      li.append(p);

      divResultados.appendChild(li);
    }
  });

  console.log(searchArray);
});
