
        const nodes = [
            /*3 basic nodes*/
            { id: "Infrastruktur.html", name: "Infrastruktur", category: "Säule", year: 2020, color: "#004567", tooltip: "<div style='background-color:#004567'><b>Details:</b><br/>Infrastruktur:<br/>Aufbau einer gemeinsamen Forschungsdateninfrastruktur: Dafür werden technische Lösungen zur Erfassung und Beschreibung von Forschungsobjekten entwickelt. Diese Objekte werden in langfristig betreute Archivierungssysteme überführt, und es werden neue Lösungen für die Speicherung von Bilddaten gefunden.</div>", clickable: true},
            { id: "MethodenTools.html", name: "Methoden & Tools", category: "Säule", year: 2020, color: "#004567", tooltip: "<div style='background-color:#004567'><b>Details:</b><br/>Methoden und Tools:<br/>Abgleich digitaler und traditioneller geisteswissenschaftlicher Methoden: dabei werden Forschungsdaten unter Verwendung von etablierten Standards mit zusätzlichen Daten semantisch ausgezeichnet (Annotation), angereichert und damit für maschinelle Systeme lesbar gemacht. Weiters werden neue Methoden wie die maschinelle Erkennung und Bearbeitung von Bildmaterial (Computer Vision) angewandt. Künstliche Intelligenz unterstützt hierbei zunehmend entsprechende Arbeitsprozesse.</div>", clickable: true},
            { id: "Wissenstransfer.html", name: "Wissenstransfer", category: "Säule", year: 2020, color: "#004567", tooltip: "<div style='background-color:#004567'><b>Details:</b><br/>Wissenstransfer:<br/>Neue Methoden und Ansätze werden leicht verständlich aufbereitet: Es werden Tutorials geschrieben, die Methoden und Werkzeuge für Benutzer ohne Vorkenntnisse erklären. Außerdem werden Lösungen entwickelt, wie Forschungsdaten präsentiert und Daten aus verschiedenen Datenbanken abgerufen (Information Retrieval) werden können . Dabei werden innovative Methoden zur Wissensvermittlung genutzt, wie z.B. die Visualisierung von Daten.</div>", clickable: true},
            
            /*organisation nodes*/
            { id: "partner.html#oaw", name: "ÖAW", category: "Organisationen", year: 2020, color: "#660000", tooltip: "<div style='background-color:#660000'><b>Details:</b><br/>Österreichische Akademie der Wissenschaften (ÖAW)</div>", clickable: true},
            { id: "partner.html#tuw", name: "TU Wien", category: "Organisationen", year: 2020, color: "#660000", tooltip: "<div style='background-color:#660000'><b>Details:</b><br/>Technische Universität Wien (TU)</div>", clickable: true},
            { id: "partner.html#ui", name: "U IBK", category: "Organisationen", year: 2020, color: "#660000", tooltip: "<div style='background-color:#660000'><b>Details:</b><br/>Universität Innsbruck</div>", clickable: true},
            { id: "partner.html#ug", name: "Uni Graz", category: "Organisationen", year: 2020, color: "#660000", tooltip: "<div style='background-color:#660000'><b>Details:</b><br/>Karl-Franzens-Universität Graz</div>", clickable: true},
            { id: "partner.html#plus", name: "PLUS", category: "Organisationen", year: 2020, color: "#660000", tooltip: "<div style='background-color:#660000'><b>Details:</b><br/>Paris Lodron Universität Salzburg (PLUS)</div>", clickable: true},
            { id: "cima.html", name: "CIMA", category: "Organisationen", year: 2021, color: "#660066", tooltip: "<div style='background-color:#660066'><b>Details:</b><br/>The Centre of Image and Material Analysis in Cultural Heritage (CIMA)</div>"},
            { id: "partner.html#abk", name: "ABK", category: "Organisationen", year: 2020, color: "#660000", tooltip: "<div style='background-color:#660000'><b>Details:</b><br/>Akademie der Bildenden Künste in Wien (ABK)</div>", clickable: true},
            { id: "partner.html#krems", name: "UWK", category: "Organisationen", year: 2020, color: "#660000", tooltip: "<div style='background-color:#660000'><b>Details:</b><br/>Universität für Weiterbildung Krems</div>", clickable: true},
            { id: "partner.html#uw", name: "Uni Wien", category: "Organisationen", year: 2020, color: "#660000", tooltip: "<div style='background-color:#660000'><b>Details:</b><br/>Universität Wien</div>", clickable: true},
            { id: "partner.html#onb", name: "ÖNB", category: "Organisationen", year: 2020, color: "#660000", tooltip: "<div style='background-color:#660000'><b>Details:</b><br/>Österreichische Nationalbibliothek (ÖNB)</div>", clickable: true},
            
            /*infrastructure-nodes*/
            { id: "https://gams.uni-graz.at", name: "GAMS", category: "Infrastruktur", year: 2020, color: "#666600", tooltip: "<div style='background-color:#666600'><b>Details:</b><br/>GAMS - Geisteswissenschaftliches Asset Management System</div>", clickable: true},
            { id: "https://arche.acdh.oeaw.ac.at", name: "ARCHE", category: "Infrastruktur", year: 2020, color: "#666600", tooltip: "<div style='background-color:#666600'><b>Details:</b><br/>ARCHE - A Resource Centre for the HumanitiEs</div>", clickable: true},
            { id: "https://phaidra.univie.ac.at", name: "PHAIDRA", category: "Infrastruktur", year: 2020, color: "#666600", tooltip: "<div style='background-color:#666600'><b>Details:</b><br/>PHAIDRA - repository for the permanent secure storage of digital assets (Universität Wien)</div>", clickable: true},
            
            /*project nodes*/
            { id: "fercan.html", name: "FERCAN", category: "Projekte", category2: "MethodenTools", year: 2021, color: "#006600", tooltip: "<div style='background-color:#006600'><b>Details:</b><br/>Die keltischen Götternamen der germanischen Provinzen (FERCAN)</div>", clickable: true},
            { id: "derla.html", name: "DERLA", category: "Projekte", category2: "MethodenTools", category3: "Wissenstransfer", year: 2022, color: "#006600", tooltip: "<div style='background-color:#006600'><b>Details:</b><br/>DERLA | Verfolgung und Widerstand im Nationalsozialismus</div>", clickable: true},
            { id: "ficker.html", name: "Ficker-Edition", category: "Projekte", category2: "MethodenTools", category3: "Wissenstransfer", year: 2024, color: "#006600", tooltip: "<div style='background-color:#006600'><b>Details:</b><br/>Edition Ludwig von Ficker</div>", clickable: true},
            { id: "hps.html", name: "HPS", category: "Projekte", category2: "MethodenTools", year: 2022, color: "#006600", tooltip: "<div style='background-color:#006600'><b>Details:</b><br/>Historisch-physikalische Sammlung (HPS)</div>", clickable: true},
            { id: "gipse.html", name: "GIPSE", category: "Projekte", category2: "MethodenTools", year: 2023, color: "#006600", tooltip: "<div style='background-color:#006600'><b>Details:</b><br/>Virtuelles Gipsmuseum</div>", clickable: true},
            { id: "digi16.html", name: "DIGI 16", category: "Projekte", category2: "MethodenTools", category3: "Wissenstransfer", year: 2022, color: "#006600", tooltip: "<div style='background-color:#006600'><b>Details:</b><br/>Digi 16: Druckwerke des 16. Jahrhunderts</div>", clickable: true},
            { id: "m3r.html", name: "M3R", category: "Projekte", category2: "MethodenTools", year: 2024, color: "#006600", tooltip: "<div style='background-color:#006600'><b>Details:</b><br/>M3R - Multimodale Repräsentation & Analyse von Manuskripten</div>", clickable: true},
            { id: "onbkulturerbe.html", name: "Kulturerbe", category: "Projekte", category2: "MethodenTools", category3: "Wissenstransfer", category4: "Infrastruktur", year: 2023, color: "#006600", tooltip: "<div style='background-color:#006600'><b>Details:</b><br/>Österreichische Nationalbibliothek: Nutzerzentrierte Zugänge zum digitalen österreichischen Kulturerbe</div>", clickable: true},
            { id: "holzmeister.html", name: "Holzmeister", category: "Projekte", category2: "MethodenTools", category3: "Infrastruktur", year: 2024, color: "#006600", tooltip: "<div style='background-color:#006600'><b>Details:</b><br/>Digitales Werkverzeichnis Clemens Holzmeister</div>", clickable: true},
            { id: "fotodatenbank.html", name: "Fotodatenbank", category: "Projekte", category2: "MethodenTools", category3: "Infrastruktur", year: 2022, color: "#006600", tooltip: "<div style='background-color:#006600'><b>Details:</b><br/>Foto-Datenbank</div>", clickable: true},
            { id: "rnab.html", name: "RNAB", category: "Projekte", category2: "MethodenTools", category3: "Infrastruktur", year: 2023, color: "#006600", tooltip: "<div style='background-color:#006600'><b>Details:</b><br/>Datenverwaltung für RNAB-konforme Metadaten - RNABle</div>", clickable: true},
            { id: "dhlehre.html", name: "DH Lehre Wien", category: "Projekte", category2: "Wissenstransfer", year: 2022, color: "#006600", tooltip: "<div style='background-color:#006600'><b>Details:</b><br/>Digital Humanities Lehre an der Universität Wien</div>", clickable: true},
            { id: "habsburg.html", name: "Habsburg", category: "Projekte", category2: "Wissenstransfer", category3: "Infrastruktur", year: 2022, color: "#006600", tooltip: "<div style='background-color:#006600'><b>Details:</b><br/>Digitale Habsburg Platform / DH an der Universität Wien</div>", clickable: true},
            { id: "dhplus.html", name: "DH@Plus", category: "Projekte", category2: "Wissenstransfer", year: 2023, color: "#006600", tooltip: "<div style='background-color:#006600'><b>Details:</b><br/>Digital Humanities an der Paris Lodron Universität Salzburg</div>", clickable: true},
            { id: "training.html", name: "training", category: "Projekte", category2: "Wissenstransfer", year: 2022, color: "#006600", tooltip: "<div style='background-color:#006600'><b>Details:</b><br/>Training an der Österreichischen Akademie der Wissenschaften</div>", clickable: true},
            { id: "eosc.html", name: "EOSC", category: "Projekte", category2: "MethodenTools", year: 2024, color: "#006600", tooltip: "<div style='background-color:#006600'><b>Details:</b><br/>European Open Science Cloud (EOSC)</div>", clickable: true},
            { id: "pipelines.html", name: "Hybrid Pipelines", category: "Projekte", category2: "Infrastruktur", year: 2024, color: "#006600", tooltip: "<div style='background-color:#006600'><b>Details:</b><br/>Hybrid Pipelines</div>", clickable: true},
            { id: "repository.html", name: "Repo-Discovery", category: "Projekte", category2: "Infrastruktur", year: 2023, color: "#006600", tooltip: "<div style='background-color:#006600'><b>Details:</b><br/>Repository-Discovery</div>", clickable: true},
            { id: "dhlehregraz.html", name: "DH Lehre Graz", category: "Projekte", category2: "Wissenstransfer", year: 2022, color: "#006600", tooltip: "<div style='background-color:#006600'><b>Details:</b><br/>Digital Humanities Lehre an der Universität Graz</div>", clickable: true}

        ];

        /* Defining Links between nodes */
        const links = [
            { source: "Infrastruktur.html", target: "MethodenTools.html" },
            { source: "Infrastruktur.html", target: "Wissenstransfer.html" },
            
            { source: "Infrastruktur.html", target: "habsburg.html" },
            { source: "Infrastruktur.html", target: "https://phaidra.univie.ac.at" },
            { source: "Infrastruktur.html", target: "onbkulturerbe.html" },
            { source: "Infrastruktur.html", target: "rnab.html" },
            { source: "Infrastruktur.html", target: "fotodatenbank.html" },
            { source: "Infrastruktur.html", target: "holzmeister.html" },
            { source: "Infrastruktur.html", target: "ficker.html" },
            { source: "Infrastruktur.html", target: "digi16.html" },
            { source: "Infrastruktur.html", target: "repository.html" },
            { source: "Infrastruktur.html", target: "pipelines.html" },
            
            { source: "MethodenTools.html", target: "Wissenstransfer.html" },
            
            { source: "MethodenTools.html", target: "ficker.html" },
            { source: "MethodenTools.html", target: "holzmeister.html" },
            { source: "MethodenTools.html", target: "gipse.html" },
            { source: "MethodenTools.html", target: "hps.html" },
            { source: "MethodenTools.html", target: "m3r.html" },
            { source: "MethodenTools.html", target: "fercan.html" },
            { source: "MethodenTools.html", target: "derla.html" },
            { source: "MethodenTools.html", target: "onbkulturerbe.html" },
            { source: "MethodenTools.html", target: "rnab.html" },
            { source: "MethodenTools.html", target: "fotodatenbank.html" },
            { source: "MethodenTools.html", target: "digi16.html" },
            { source: "MethodenTools.html", target: "eosc.html" },
            
            { source: "Wissenstransfer.html", target: "derla.html" },
            { source: "Wissenstransfer.html", target: "dhplus.html" },
            { source: "Wissenstransfer.html", target: "dhlehre.html" },
            { source: "Wissenstransfer.html", target: "dhlehregraz.html" },
            { source: "Wissenstransfer.html", target: "habsburg.html" },
            { source: "Wissenstransfer.html", target: "onbkulturerbe.html" },
            { source: "Wissenstransfer.html", target: "training.html" },
            { source: "Wissenstransfer.html", target: "digi16.html" },
            { source: "Wissenstransfer.html", target: "ficker.html" },
             
            { source: "Infrastruktur.html", target: "https://gams.uni-graz.at" },
            { source: "Infrastruktur.html", target: "https://arche.acdh.oeaw.ac.at" },
            { source: "Infrastruktur.html", target: "https://phaidra.univie.ac.at" },
            { source: "https://gams.uni-graz.at", target: "partner.html#ug" },
            { source: "https://arche.acdh.oeaw.ac.at", target: "partner.html#oaw" },
            
            { source: "partner.html#ug", target: "derla.html" },
            { source: "partner.html#ug", target: "hps.html" },
            { source: "partner.html#ug", target: "gipse.html" },
            { source: "partner.html#ug", target: "fercan.html" },
            { source: "partner.html#ug", target: "digi16.html" },
            { source: "partner.html#ug", target: "dhlehregraz.html" },
            { source: "partner.html#ui", target: "ficker.html" },
            { source: "partner.html#ui", target: "holzmeister.html" },
            { source: "partner.html#ui", target: "fotodatenbank.html" },
            { source: "partner.html#ui", target: "rnab.html" },
            { source: "partner.html#uw", target: "https://phaidra.univie.ac.at" },
            { source: "partner.html#uw", target: "habsburg.html" },
            { source: "partner.html#uw", target: "dhlehre.html" },
            { source: "cima.html", target: "partner.html#uw" },
            { source: "cima.html", target: "partner.html#krems" },
            { source: "cima.html", target: "partner.html#tuw" },
            { source: "cima.html", target: "partner.html#abk" },
            { source: "cima.html", target: "m3r.html" },
            { source: "partner.html#abk", target: "m3r.html" },
            { source: "partner.html#onb", target: "onbkulturerbe.html" },
            { source: "partner.html#plus", target: "dhplus.html" },
            { source: "partner.html#oaw", target: "training.html" },
            { source: "partner.html#oaw", target: "eosc.html" },
            { source: "partner.html#oaw", target: "repository.html" },
            { source: "partner.html#oaw", target: "pipelines.html" },
            
            { source: "partner.html#tuw", target: "m3r.html" },
            { source: "partner.html#krems", target: "m3r.html" },
            
            { source: "m3r.html", target: "partner.html#uw" }

        ];

        const container = d3.select('.containerng');
const width = container.node().offsetWidth;
const height = container.node().offsetHeight;

const svg = d3.select("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("preserveAspectRatio", "xMidYMid meet");

const graph = svg.select("#graph");

const color = d3.scaleOrdinal(d3.schemeCategory10);

// Calculate radius based on text width
function calculateRadius() {
    const tempText = svg.append("text")
        .attr("class", "temp-textng")
        .style("font", "12px sans-serif")
        .style("visibility", "hidden");

    nodes.forEach(node => {
        tempText.text(node.name);
        const bbox = tempText.node().getBBox();
        node.radius = bbox.width / 2 + 10;  // Add some padding
    });

    tempText.remove();
}

calculateRadius();

// Fix the position of the first three nodes
nodes[0].fx = width / 4;
nodes[0].fy = height / 2;
nodes[1].fx = width / 2;
nodes[1].fy = height / 4;
nodes[2].fx = (3 * width) / 4;
nodes[2].fy = height / 2;

const linkDistance = d => d.source.radius + d.target.radius + 20;

const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(linkDistance))
    .force("charge", d3.forceManyBody().strength(-1000))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide().radius(d => d.radius + 5));

const tooltip = d3.select("#tooltip");

function createLinks(linksData) {
    const link = graph.selectAll(".linkng")
        .data(linksData, d => `${d.source.id}-${d.target.id}`);

    link.exit().remove();

    link.enter().append("line")
        .attr("class", "linkng");

    link.merge(link);
}

function createNodes(nodesData) {
    const nodeGroup = graph.selectAll(".nodeng")
        .data(nodesData, d => d.id);

    nodeGroup.exit().remove();

    const enterNodes = nodeGroup.enter().append("g")
        .attr("class", "nodeng")
        .on("click", (event, d) => {
            if (d.clickable) {
                window.open(d.id, '_blank');
            }
        })
        .on("mouseover", (event, d) => {
            tooltip.style("opacity", 1)
                .html(d.tooltip); // Use the tooltip property for the text
        })
        .on("mouseout", () => {
            tooltip.style("opacity", 0);
        })
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    enterNodes.append("circle")
        .attr("r", d => d.radius)
        .attr("fill", d => d.color);

    enterNodes.append("text")
        .attr("dy", 3)
        .attr("text-anchor", "middle")
        .text(d => d.name);

    nodeGroup.merge(enterNodes);
}

function ticked() {
    graph.selectAll(".linkng")
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    graph.selectAll(".nodeng")
        .attr("transform", d => {
            // Keep nodes within the container bounds
            if (!d.fx) { // Only constrain the position of non-fixed nodes
                d.x = Math.max(d.radius, Math.min(width - d.radius, d.x));
                d.y = Math.max(d.radius, Math.min(height - d.radius, d.y));
            }
            return `translate(${d.x},${d.y})`;
        });
}

/* Handling mouse drag of nodes */
function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
}

function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    // Do not nullify fx and fy for fixed nodes
    if (d.id !== "Infrastruktur.html" && d.id !== "MethodenTools.html" && d.id !== "Wissenstransfer.html") {
        d.fx = null;
        d.fy = null;
    }
}

/* Zoom functionality */
function applyZoomAndPan() {
    const zoom = d3.zoom()
        .scaleExtent([0.5, 3])
        .on('zoom', (event) => {
            graph.attr('transform', event.transform);
        });

    svg.call(zoom);
}

createLinks(links);
createNodes(nodes);
simulation.nodes(nodes).on("tick", ticked);
simulation.force("link").links(links);
applyZoomAndPan();

// Filter nodes based on checkbox state and timeline value
function updateGraph() {
    const showMethodenTools = d3.select("#filterMethodenTools").property("checked");
    const showInfrastruktur = d3.select("#filterInfrastruktur").property("checked");
    const showOrganisationen = d3.select("#filterOrganisationen").property("checked");
    const showProjekte = d3.select("#filterProjekte").property("checked");
    const showWissenstransfer = d3.select("#filterWissenstransfer").property("checked");
    const timelineValue = +d3.select("#timeline").property("value");

    const filteredNodes = nodes.filter(node => {
        if (node.category === "Säule") return true; // Always show the three basic nodes with category "Säule"

        // Apply the OR logic for category 1, 2, 3, 4, 5
        // Every node can be inside up to 5 categories. depending on that checkbox filters will show or hide a node
        const categoryMatch = (node.category === "MethodenTools" && showMethodenTools) || 
                              (node.category === "Infrastruktur" && showInfrastruktur) ||
                              (node.category === "Organisationen" && showOrganisationen) || 
                              (node.category === "Projekte" && showProjekte) || 
                              (node.category === "Wissenstransfer" && showWissenstransfer);

        const category2Match = (node.category2 === "MethodenTools" && showMethodenTools) || 
                               (node.category2 === "Infrastruktur" && showInfrastruktur) ||
                               (node.category2 === "Organisationen" && showOrganisationen) || 
                               (node.category2 === "Projekte" && showProjekte) || 
                               (node.category2 === "Wissenstransfer" && showWissenstransfer);
                               
        const category3Match = (node.category3 === "MethodenTools" && showMethodenTools) || 
                               (node.category3 === "Infrastruktur" && showInfrastruktur) ||
                               (node.category3 === "Organisationen" && showOrganisationen) || 
                               (node.category3 === "Projekte" && showProjekte) || 
                               (node.category3 === "Wissenstransfer" && showWissenstransfer);
                               
        const category4Match = (node.category4 === "MethodenTools" && showMethodenTools) || 
                               (node.category4 === "Infrastruktur" && showInfrastruktur) ||
                               (node.category4 === "Organisationen" && showOrganisationen) || 
                               (node.category4 === "Projekte" && showProjekte) || 
                               (node.category4 === "Wissenstransfer" && showWissenstransfer);
        
        const category5Match = (node.category5 === "MethodenTools" && showMethodenTools) || 
                               (node.category5 === "Infrastruktur" && showInfrastruktur) ||
                               (node.category5 === "Organisationen" && showOrganisationen) || 
                               (node.category5 === "Projekte" && showProjekte) || 
                               (node.category5 === "Wissenstransfer" && showWissenstransfer);

        if (!(categoryMatch || category2Match || category3Match || category4Match || category5Match )) return false;

        if (node.year > timelineValue) return false;

        return true;
    });

    const filteredLinks = links.filter(link => filteredNodes.some(node => node.id === link.source.id) && filteredNodes.some(node => node.id === link.target.id));
    
    // Ensure fixed nodes stay fixed
    filteredNodes.forEach(node => {
        if (node.id === "Infrastruktur.html" || node.id === "MethodenTools.html" || node.id === "Wissenstransfer.html") {
            node.fx = node.x;
            node.fy = node.y;
        }
    });

    simulation.nodes(filteredNodes).on("tick", ticked);
    simulation.force("link").links(filteredLinks);
    createNodes(filteredNodes);
    createLinks(filteredLinks);
    simulation.alpha(1).restart();
}

d3.select("#filterMethodenTools").on("change", updateGraph);
d3.select("#filterInfrastruktur").on("change", updateGraph);
d3.select("#filterWissenstransfer").on("change", updateGraph);
d3.select("#filterOrganisationen").on("change", updateGraph);
d3.select("#filterProjekte").on("change", updateGraph);

d3.select("#timeline").on("input", function() {
    d3.select("#timelineValue").text(this.value);
    updateGraph();
});