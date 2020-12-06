const TreeNode = require('./TreeNode.js');

const menu = new TreeNode('Menu');

const entres = {
  'Breakfast': ['Cereal', 'BBQ Chicken', 'Oatmeal'],
  'Lunch': ['Soup', 'Sandwich', 'Lasagna'],
  'Dinner': ['Yogurt', 'Filet Mignon', 'Fish Florentine']
};

const mealTypes = Object.keys(entres);

for (let i = 0; i < mealTypes.length; i++) {
  menu.addChild(mealTypes[i]);
  const entreList = entres[mealTypes[i]];
  entreList.forEach( entre => {
    menu.children[i].addChild(entre);
  })
}

menu.print();

menu.data = 'Corrected Menu';
menu.removeChild('Yogurt');
menu.children[0].addChild('Yogurt');
menu.removeChild('BBQ Chicken');
menu.children[2].addChild('BBQ Chicken');
menu.print();

menu.depthFirstTraversal();