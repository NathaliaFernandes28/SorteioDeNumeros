let n1 = prompt("Jogador 1, digite um número");
n1 = parseInt(n1);
let n2 = prompt("Jogador 2, digite um outro número");
n2 = parseInt(n2);

if (n1 === n2) {
  alert("Vocês empataram!");
} else {
  let sorteio = parseInt(Math.random() * 2);

  if (sorteio === 0) {
    if (n1 < n2) {
      alert("Ganhou o jogador 1");
    } else {
      alert("Ganhou o jogador 2");
    }
  } else {
    if (n1 > n2) {
      alert("Ganhou o jogador 1");
    } else {
      alert("Ganhou o jogador 2");
    }
  }
}
