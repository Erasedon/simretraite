//prendre le dernier caractère du lien
var mdr_id = window.location.href;
mdr_id = mdr_id.slice(-5)
mdr_id = mdr_id.charAt(0);
mdr_id -= 1

const mdr1 = [{
  competence: 'accueil',
  val: 12,
}, {
  competence: 'activité',
  val: 7,
}, {
  competence: 'relaction',
  val: 7,
}, {
  competence: 'entretien',
  val: 7,
}, {
  competence: 'rapidité',
  val: 6,
}, {
  competence: 'modernité',
  val: 5,
}];

const mdr2=[{
  competence: 'accueil',
  val: 17,
}, {
  competence: 'activité',
  val: 5,
}, {
  competence: 'relaction',
  val: 7,
}, {
  competence: 'entretien',
  val: 9,
}, {
  competence: 'rapidité',
  val: 6,
}, {
  competence: 'modernité',
  val: 3,
}]

const mdr3=[{
  competence: 'accueil',
  val: 13,
}, {
  competence: 'activité',
  val: 8,
}, {
  competence: 'relaction',
  val: 15,
}, {
  competence: 'entretien',
  val: 7,
}, {
  competence: 'rapidité',
  val: 6,
}, {
  competence: 'modernité',
  val: 5,
}]
const mdr4=[{
  competence: 'accueil',
  val: 11,
}, {
  competence: 'activité',
  val: 7,
}, {
  competence: 'relaction',
  val: 7,
}, {
  competence: 'entretien',
  val: 7,
}, {
  competence: 'rapidité',
  val: 6,
}, {
  competence: 'modernité',
  val: 18,
}]
const mdr5=[{
  competence: 'accueil',
  val: 13,
}, {
  competence: 'activité',
  val: 7,
}, {
  competence: 'relaction',
  val: 7,
}, {
  competence: 'entretien',
  val: 7,
}, {
  competence: 'rapidité',
  val: 6,
}, {
  competence: 'modernité',
  val: 5,
}]
const mdr6=[{
  competence: 'accueil',
  val: 15,
}, {
  competence: 'activité',
  val: 7,
}, {
  competence: 'relaction',
  val: 7,
}, {
  competence: 'entretien',
  val: 4,
}, {
  competence: 'rapidité',
  val: 6,
}, {
  competence: 'modernité',
  val: 5,
}]

list_mdr = [mdr1, mdr2, mdr3, mdr4, mdr5,mdr6]
var dataSource = list_mdr[mdr_id]
console.log(mdr_id)
console.log(dataSource)
$(() => {
  $('#pie').dxPieChart({
    size: {
      width: 500,
    },
    palette: 'bright',
    dataSource,
    series: [
      {
        argumentField: 'competence',
        valueField: 'val',
        label: {
          visible: true,
          connector: {
            visible: true,
            width: 1,
          },
        },
      },
    ],
    title: 'statisque de la maison de retraite',
    export: {
      enabled: true,
    },
    onPointClick(e) {
      const point = e.target;

      toggleVisibility(point);
    },
    onLegendClick(e) {
      const arg = e.target;

      toggleVisibility(this.getAllSeries()[0].getPointsByArg(arg)[0]);
    },
  });

  function toggleVisibility(item) {
    if (item.isVisible()) {
      item.hide();
    } else {
      item.show();
    }
  }
});
