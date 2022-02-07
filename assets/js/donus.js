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


const dataSource = [{
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