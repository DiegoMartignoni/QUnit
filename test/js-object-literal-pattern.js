var macchina1 = {
  anno: 2000,
  marca: 'Ford',
  modello: 'Fusion',
  getInfo: function (){
    return 'Veicolo: ' + this.anno + ' ' + this.marca + ' ' + this.modello;
  }
}

QUnit.test( "Object Literal Test", function( Oggettotest ) {
  var expected = 'Veicolo: 2000 Ford Fusion';
  var actual = macchina1.getInfo();
  Oggettotest.equal(actual, expected, 'Valore aspettato: ' + expected + ' Valore vero: ' + actual);
});
