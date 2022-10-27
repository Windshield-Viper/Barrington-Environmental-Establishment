var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");


img1.addEventListener("mouseover", img1func);
img2.addEventListener("mouseover", img2func);
img3.addEventListener("mouseover", img3func);

function img1func() {
    document.getElementById("fast-fact").innerHTML = "Generating electricity and heat by burning fossil fuels such as coal, oil, and natural gas causes a large chunk of global emissions. Most electricity is still produced from fossil fuels; only about a quarter comes from wind, solar, and other renewable sources.";
}

function img2func() {
    document.getElementById("fast-fact").innerHTML = "Manufacturing and industry produce emissions, mostly from burning fossil fuels to produce energy for making things like cement, iron, steel, electronics, plastics, clothes, and other goods. Mining and other industrial processes also release gases.";
}

function img3func() {
    document.getElementById("fast-fact").innerHTML = "Cutting down forests to create farms or pastures, or for other reasons, causes emissions, since trees, when they are cut, release the carbon they have been storing. Since forests absorb carbon dioxide, destroying them also limits nature’s ability to keep emissions out of the atmosphere.";
}