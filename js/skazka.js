const var1Repl = $('.j-var1');
const var2Repl = $('.j-var2');
const var3Repl = $('.j-var3');
const var4Repl = $('.j-var4');
const var5Repl = $('.j-var5');
const var6Repl = $('.j-var6');
const speachRepl = $('.j-speach');

const btnCreate = $('.j-btn-create');
const btnReplace = $('.j-btn-replace');
const textNode = $('.j-text');


const startObj = {
  "text":[
    "Жили-были {var1} да {var2}",
    "Была у них {var3}",
    "Снесла {var3} {var4}, не простое - золотое",
    "- {var1} бил, бил - не разбил",
    "- {var2} била, била - не разбила",
    "{var5} бежала, {var6} задела, {var4} упало и разбилось.",
    "{var1} плачет, {var2} плачет, а {var3} кудахчет:","{speach}"
  ]
};

btnCreate.click(function() {
  textNode.html(startObj.text);
})

btnReplace.click(function() {
  const var1 = var1Repl.val();
  const var2 = var2Repl.val();
  const var3 = var3Repl.val();
  const var4 = var4Repl.val();
  const var5 = var5Repl.val();
  const var6 = var6Repl.val();
  const speach = speachRepl.val();
    
  const newObj = {
    "text":[
      `Жили-были ${var1} да ${var2}`,
      `Была у них ${var3}`,
      `Снесла ${var3} ${var4}, не простое - золотое`,
      `- ${var1} бил, бил - не разбил`,
      `- ${var2} била, била - не разбила`,
      `${var5} бежала, ${var6} задела, ${var4} упало и разбилось`,
      `${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
      `${speach}`,
    ]
  };
  
    
  textNode.html(newObj.text);
})
