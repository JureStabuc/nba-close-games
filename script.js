var select = d3.select("#myteam");

d3.csv("teams.csv", function(error, data) {
  if (error) throw error;
  select.selectAll("option")
    .data(data)
    .enter()
    .append("option")
    .attr("value", function(d) { return d.team; })
    .attr("id", function(d) { return d.name; })
    .text(function(d) { return d.name; });
});

// LINE CHART

  var width = document.getElementById('vis')
      .clientWidth;
  var height = document.getElementById('vis')
      .clientHeight;

  var margin = {
      top: 50,
      bottom: 100,
      left: 300,
      right: 300
  };

  var svg = d3.select('#vis')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  var tooltip = d3.select('body')
      .append('div')
      .attr('class', 'tooltip');

  width = width - margin.left - margin.right;
  height = height - margin.top - margin.bottom;

  var tooltipFormat = d3.timeFormat('%S');

  var x_scale = d3.scaleTime()
      .range([0, width]);

  var y_scale = d3.scaleLinear()
      .range([height, 0]);

  var band_scale = d3.scaleBand()
      .range([0, width]);

  var line = d3.line()
      .curve(d3.curveLinear)
      .x(function(d) {
          return x_scale((+d.seconds_left));
      })
      .y(function(d) {
          return y_scale(+d.advantage);
      });

  var line2 = d3.line()
      .curve(d3.curveLinear)
      .x(function(d) {
          return x_scale((+d.seconds_left));
      })
      .y(function(d) {
          return y_scale(+d.disadvantage);
      });


  var x_axis = d3.axisBottom()
      .scale(x_scale);

  var y_axis = d3.axisLeft()
      .scale(y_scale);

  var z = d3.scaleOrdinal(d3.schemeCategory20)
      .range(["red", "green"]);

  svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0, ' + height + ')');

  svg.append('g')
      .attr('class', 'y axis');

  svg.append("text")
    .attr("x", (width / 2))
    .attr("y", 0 - (margin.top / 2))
    .attr("text-anchor", "middle")
    .style("font-size", "30px")
    .style("margin-bottom", "20px")
    .text("When incorrect calls are made");



// -------------------------------------------------------

// STACKED - count wins, loses

var width_form = document.getElementById("stacked")
    .clientWidth;

var height_form = document.getElementById("stacked")
    .clientHeight

var margin_form = {
    top: 50,
    bottom: 50,
    left: 300,
    right: 300
}

var svg_form = d3.select("#stacked")
    .append("svg")
    .attr("width", width_form)
    .attr("height", height_form)
    .attr("align","center")
    .append("g")
    .attr("transform", "translate(" + margin_form.left + "," + margin_form.top + ")");




width_form = width_form - margin_form.left - margin_form.right;
height_form = height_form - margin_form.top - margin_form.bottom;

var y_form = d3.scaleBand()
    .rangeRound([height_form, 0])
    .padding(0.3)
    .align(0.3);

var x_form = d3.scaleLinear()
    .rangeRound([0, width_form]);

var z_form = d3.scaleOrdinal(d3.schemeCategory20)
    .range(["green", "red"]);

var labels_form = d3.scaleOrdinal(d3.schemeCategory20)
    .range(["victories", "defeats"]);

var stack_form = d3.stack()
    .offset(d3.stackOffsetExpand);

var x_axisForm = d3.axisBottom()
    .scale(x_form);

var y_axisForm = d3.axisLeft()
    .scale(y_form);


svg_form.append("text")
  .attr("x", (width_form / 2))
  .attr("y", 0 - (margin_form.top / 2))
  .attr("text-anchor", "middle")
  .style("font-size", "30px")
  .style("margin-bottom", "20px")
  .text("Overall performance");

svg_form.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + height_form + ")");

var tooltip_form = d3.select("body")
    .append("div")
    .attr("class", "tooltipForm");

// var tooltip_form = svg_form.append("g")
//   .attr("class", "tooltip_form")
//   .style("display", "none");
//
// tooltip_form.append("rect")
//   .attr("width", 60)
//   .attr("height", 20)
//   .attr("fill", "white")
//   .style("opacity", 0.5);
//
// tooltip_form.append("text")
//   .attr("x", 30)
//   .attr("dy", "1.2em")
//   .style("text-anchor", "middle")
//   .attr("font-size", "12px")
//   .attr("font-weight", "bold");

// -------------------------------------------------------

// STACKED - privileged

var width_priv = document.getElementById("privileged")
    .clientWidth;

var height_priv = document.getElementById("privileged")
    .clientHeight

var margin_priv = {
  top: 50,
  bottom: 50,
  left: 300,
  right: 300
}

var svg_priv = d3.select("#privileged")
    .append("svg")
    .attr("width", width_priv)
    .attr("height", height_priv)
    .append("g")
    .attr("transform", "translate(" + margin_priv.left + "," + margin_priv.top + ")");

width_priv = width_priv - margin_priv.left - margin_priv.right;
height_priv = height_priv - margin_priv.top - margin_priv.bottom;

var y_priv = d3.scaleBand()
    .rangeRound([height_priv, 0])
    .padding(0.3)
    .align(0.3);

var x_priv = d3.scaleLinear()
    .rangeRound([0, width_priv]);

var z_priv = d3.scaleOrdinal(d3.schemeCategory20)
    .range(["green", "red"]);

var stack_priv = d3.stack()
    .offset(d3.stackOffsetExpand);

var x_axisPriv = d3.axisBottom()
    .scale(x_priv);

var y_axisPriv = d3.axisLeft()
    .scale(y_priv);

svg_priv.append("g")
    .attr("class", "axis axis2--x")
    .attr("transform", "translate(0," + height_priv + ")");

var tooltip_priv = d3.select("body")
    .append("div")
    .attr("class", "tooltipPriv");

svg_priv.append("text")
  .attr("x", (width_priv/ 2))
  .attr("y", 0 - (margin_form.top / 2))
  .attr("text-anchor", "middle")
  .style("font-size", "30px")
  .style("margin-bottom", "20px")
  .text("Overall incorrect calls");



// -------------------------------------------------

// Drawing the charts

  function draw (value) {

      d3.csv("calls/" + value + ".csv", function (error, csv_data) {
        // console.log(csv_data);
        y_scale.domain([0, d3.max(csv_data, function(d) {
            return Math.max(+d.advantage, +d.disadvantage);
        })]);
        x_scale.domain(d3.extent(csv_data, function(d) {
            return (+d.seconds_left);
        }));

        band_scale.domain(csv_data.map(function(d) {
            return (+d.seconds_left);
        }));

        var lines = svg.selectAll('.line')
            .data([csv_data]);

        var linesO = svg.selectAll('.lineo')
            .data([csv_data]);

        lines
            .enter()
            .append('path')
            .attr('class', 'line')
            .attr('fill', 'none')
            .attr('stroke', 'green')
            .merge(lines)
            .transition()
            .duration(1000)
            .attr('d', line);

        linesO
            .enter()
            .append('path')
            .attr('class', 'lineo')
            .attr('fill', 'none')
            .attr('stroke', 'red')
            .merge(linesO)
            .transition()
            .duration(1000)
            .attr('d', line2);


        var bars = svg.selectAll('.bar')
            .data(csv_data);

        bars
            .exit()
            .remove();

        bars
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', function(d,i) {
                // console.log(i);
                return band_scale((+d.seconds_left));
            })
            .attr('width', band_scale.bandwidth())
            .attr('height', height)
            .attr('y', 0)
            .attr('fill', 'black')
            .attr('opacity', 0)
            .on('mouseover', mouseOver)
            .on('mousemove', mouseMove)
            .on('mouseout', mouseOut);

        d3.select('.x.axis')
            .call(x_axis
              .ticks(24)
              .tickFormat(d3.format(2,"s")));

        d3.select('.y.axis')
            .transition()
            .duration(1000)
            .call(y_axis);


        var legend = svg.selectAll(".legend")
          .data(csv_data.columns.slice(2).reverse())
          .enter().append("g")
            .attr("class", "legend")
            .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; })
            .style("font", "10px sans-serif");

        legend.append("rect")
            .attr("x", width)
            .attr("width", 18)
            .attr("height", 18)
            .attr("fill", z);

        legend.append("text")
            .attr("x", width+20)
            .attr("y", 9)
            .attr("dy", ".35em")
            .attr("text-anchor", "start")
            .text(function(d) { if (d === "advantage") {return "In favour"} else {return "Against"};});
        function mouseOver(d,i) {
            var date = (d.advantage);
            var displayDate = tooltipFormat(date);
            console.log("EEEE");
            console.log(i);

            d3.select(this)
                .transition()
                .style('opacity', 0.3);

            tooltip
                .style('display', null)
                .html('<p>Number of calls in advantage: ' + d.advantage + '<br>'+'Number of calls in disadvantage: ' + d.disadvantage + '<br>Seconds left: ' + (+d.seconds_left+5) + '</p>');
        };

        function mouseMove(d) {
            tooltip
                .style('top', (d3.event.pageY - 20) + "px")
                .style('left', (d3.event.pageX + 20) + "px");
        };

        function mouseOut(d) {
            d3.select(this)
                .transition()
                .style('opacity', 0)

            tooltip
                .style('display', 'none');
        };


      });

      d3.csv("form/" + value + ".csv", type, function(error, data) {
        data.sort(function(a, b) { return b[data.columns[1]] /  b.total - a[data.columns[1]] /  a.total; });

        // x_form.domain([0, 1]).nice()
        y_form.domain(data.map(function(d) { return d.index; } ));
        z_form.domain(data.columns.slice(1));

        var layer = svg_form.selectAll(".serie")
          .data(stack_form.keys(data.columns.slice(1))(data))

        layer
          .exit()
          .remove()

        var new_layer = layer.enter()
          .append("g")
          .attr("class", "serie")

        new_layer.selectAll("rect")
          .data(function(d) { return d;})
          .enter().append("rect")
            .attr("y", function(d) { return y_form(d.data.index); })
            .transition()
            .duration(1000)
            .attr("x", function(d) { return x_form(d[0]); })
            .attr("width", function(d) { return x_form(d[1]) - x_form(d[0]); })
            .attr("height", y_form.bandwidth())
            .attr("fill", function(d) { if (d[0] === 0) {return "green"} else {return "red"} ;});

        new_layer.merge(layer)
            // .data(stack_form.keys(data.columns.slice(1))(data))
            .selectAll("rect")
            .data(function(d) { return d;})
            .transition()
            .duration(1000)
            .attr("width", function(d) { return x_form(d[1]) - x_form(d[0]); })
            .attr("y", function(d) { return y_form(d.data.index); })
            .attr("x", function(d) { return x_form(d[0]); });

        new_layer.selectAll("text")
          .data(function(d) { return d; })
          .enter()
          .append("text")
          .text(function(d) { if (d[0] === 0) {return "Victories: "+ Math.round((d[1] - d[0])*100)+"%"} else {return "Defeats: "+ Math.round((d[1] - d[0])*100)+"%"} ;})
          // return z_form(d.key) + Math.round((d[1] - d[0])*100)+"%"
          .style("color", "black")
          .style("font-size", "20px")
          .attr("x", function(d) { if (d[0] === 0) {return x_form(d[0])} else {return x_form(d[1])-120}; })
          .attr("y", function(d) { return y_form(d.data.index)-10; })

        new_layer.merge(layer)
          .selectAll("text")
          .data(function(d) { return d; })
          .text(function(d) { if (d[0] === 0) {return "Victories: "+ Math.round((d[1] - d[0])*100)+"%"} else {return "Defeats: "+ Math.round((d[1] - d[0])*100)+"%"} ;})
          // return z_form(d.key) + Math.round((d[1] - d[0])*100)+"%"
          // .style("color", "black")
          // .attr("x", function(d) { if (d[0] === 0) {return x_form(d[0])} else {return x_form(d[1])-90}; })
          // .attr("y", function(d) { return y_form(d.data.index)-10; })






        d3.select('.axis.axis--x')
            .call(x_axisForm.ticks(10, "%"));
        });

        d3.csv("form_home/" + value + ".csv", type, function(error, data) {
          // text left
          var text_stackedLeft = d3.select("#text-left");
          var parasLeft = text_stackedLeft.selectAll("p")
              .data(data);

          parasLeft
              .exit()
              .remove();

          var new_parasLeft = parasLeft
              .enter()
              .append('p');

          new_parasLeft.merge(parasLeft)
              .text(function(d, i) {
                win_percHome = Math.round((d.home_wins/d.total)*100);
                  return "Home victories: " + win_percHome + "%";
              });
              var text_stackedRight = d3.select("#text-right");
              var parasRight = text_stackedRight.selectAll("p")
                  .data(data);
              console.log(data);

              parasRight
                  .exit()
                  .remove();

              var new_parasRight = parasRight
                  .enter()
                  .append('p');

              new_parasRight.merge(parasRight)
                .data(data)
                .text(function(d, i) {
                  def_percHome = Math.round((d.home_lost/d.total)*100);
                    return "Home defeats: " + def_percHome + "%";
                });
        });

        d3.csv("form_away/" + value + ".csv", type, function(error, data) {
          // text left

          var text_stackedLeft = d3.selectAll("#text-left");
          var parasLeft = text_stackedLeft.append("p")
              .data(data)
              .text(function(d, i) {
                win_percAway = Math.round((d.away_wins/d.total)*100);
                  return "Away victories: " + win_percAway + "%";
              });

          var text_stackedRight = d3.selectAll("#text-right");
          var parasRight = text_stackedRight.append("p")
              .data(data)
              .text(function(d, i) {
                def_percAway = Math.round((d.away_lost/d.total)*100);
                  return "Away defeats: " + def_percAway + "%";
              });
        });
        d3.csv("advantage/" + value + ".csv", type, function(error, data) {
          // x_form.domain([0, 1]).nice()
          y_priv.domain(data.map(function(d) { return d.index; } ));
          z_priv.domain(data.columns.slice(1));

          var layer = svg_priv.selectAll(".serie")
            .data(stack_priv.keys(data.columns.slice(1))(data))

          layer
            .exit()
            .remove()

          var new_layer = layer.enter()
            .append("g")
            .attr("class", "serie")

          new_layer.selectAll("rect")
            .data(function(d) { return d;})
            .enter().append("rect")
              .attr("y", function(d) { return y_priv(d.data.index); })
              .transition()
              .duration(1000)
              .attr("x", function(d) { return x_priv(d[0]); })
              .attr("width", function(d) { return x_priv(d[1]) - x_priv(d[0]); })
              .attr("height", y_priv.bandwidth())
              .attr("fill", function(d) { if (d[0] === 0) {return "green"} else {return "red"} ;});

          new_layer.merge(layer)
              // .data(stack_form.keys(data.columns.slice(1))(data))
              .selectAll("rect")
              .data(function(d) { return d;})
              .transition()
              .duration(1000)
              .attr("width", function(d) { return x_priv(d[1]) - x_priv(d[0]); })
              .attr("y", function(d) { return y_priv(d.data.index); })
              .attr("x", function(d) { return x_priv(d[0]); });

          new_layer.selectAll("text")
            .data(function(d) { return d; })
            .enter()
            .append("text")
            .text(function(d) { if (d[0] === 0) {return "In favour: "+ Math.round((d[1] - d[0])*100)+"%"} else {return "Against: "+ Math.round((d[1] - d[0])*100)+"%"} ;})
            .style("color", "black")
            .style("font-size", "20px")
            .attr("x", function(d) { if (d[0] === 0) {return x_priv(d[0])} else {return x_priv(d[1])-120}; })
            .attr("y", function(d) { return y_priv(d.data.index)-10; });

          new_layer.merge(layer)
            .selectAll("text")
            .data(function(d) { return d; })
            .text(function(d) { if (d[0] === 0) {return "In favour: "+ Math.round((d[1] - d[0])*100)+"%"} else {return "Against: "+ Math.round((d[1] - d[0])*100)+"%"} ;});

            // .text(function(d) { if (d[0] === 0) {return "Victories: "+ Math.round((d[1] - d[0])*100)+"%"} else {return "Defeats: "+ Math.round((d[1] - d[0])*100)+"%"} ;})
            // return z_form(d.key) + Math.round((d[1] - d[0])*100)+"%"
            // .style("color", "black")
            // .attr("x", function(d) { if (d[0] === 0) {return x_form(d[0])} else {return x_form(d[1])-90}; })
            // .attr("y", function(d) { return y_form(d.data.index)-10; })







          // data.sort(function(a, b) { return b[data.columns[1]] /  b.total - a[data.columns[1]] /  a.total; });
          //
          // y_priv.domain(data.map(function(d) { return d.index; } ));
          // z_priv.domain(data.columns.slice(1));
          //
          // svg_priv.selectAll(".serie1").remove();
          //
          // console.log(data);
          //
          // var new_layer = svg_priv.selectAll(".serie1")
          //   .data(stack_priv.keys(data.columns.slice(1))(data))
          //   .enter().append("g")
          //   .attr("class", "serie1");
          //
          // new_layer.selectAll("rect")
          //   .data(function(d) { return d; })
          //   .enter().append("rect")
          //     .attr("y", function(d) { return y_priv(d.data.index); })
          //     .transition()
          //     .duration(1000)
          //     .attr("x", function(d) { return x_priv(d[0]); })
          //     .attr("width", function(d) { return x_priv(d[1]) - x_priv(d[0]); })
          //     .attr("height", y_priv.bandwidth())
          //     .attr("fill", function(d) { if (d[0] === 0) {return "green"} else {return "red"} ;});
          //
          // new_layer.selectAll("text")
          //   .data(function(d) { return d; })
          //   .enter()
          //   .append("text")
          //   .text(function(d) { if (d[0] === 0) {return "In favour: "+ Math.round((d[1] - d[0])*100)+"%"} else {return "Against: "+ Math.round((d[1] - d[0])*100)+"%"} ;})
          //   .style("color", "black")
          //   .style("font-size", "20px")
          //   .attr("x", function(d) { if (d[0] === 0) {return x_priv(d[0])} else {return x_priv(d[1])-120}; })
          //   .attr("y", function(d) { return y_priv(d.data.index)-10; });



          d3.select('.axis.axis2--x')
              .call(x_axisPriv.ticks(10, "%"));

          });

          d3.csv("advantage_home/" + value + ".csv", type, function(error, data) {
            // text left


            // text

            var text_divLeft = d3.select("#privileged-left");
            var parasLeft = text_divLeft.selectAll("p")
                .data(data);

            parasLeft
                .exit()
                .remove();

            var new_parasLeft = parasLeft
                .enter()
                .append('p');

            new_parasLeft.merge(parasLeft)
                .text(function(d, i) {
                    console.log(d);
                    adv_percHome = Math.round((d.advantage/d.total)*100);
                      console.log(d);
                      return "Home advantage: " + adv_percHome + "%";
                });

                var text_divRight = d3.select("#privileged-right");
                var parasRight = text_divRight.selectAll("p")
                    .data(data);

                parasRight
                    .exit()
                    .remove();

                var new_parasRight = parasRight
                    .enter()
                    .append('p');

                new_parasRight.merge(parasRight)
                    .text(function(d, i) {
                        // console.log(d);
                        dis_percHome = Math.round((d.disadvantage/d.total)*100);
                          console.log(d);
                          return "Home disadvantage: " + dis_percHome + "%";
                    });
          });
          d3.csv("advantage_away/" + value + ".csv", type, function(error, data) {
            // text left

            var text_stackedLeft = d3.selectAll("#privileged-left");
            var parasLeft = text_stackedLeft.append("p")
                .data(data)
                .text(function(d, i) {
                  adv_percAway = Math.round((d.advantage/d.total)*100);
                    console.log(d);
                    return "Away advantage: " + adv_percAway + "%";
                });

            var text_stackedRight = d3.selectAll("#privileged-right");
            var parasRight = text_stackedRight.append("p")
                .data(data)
                .text(function(d, i) {
                  dis_percAway = Math.round((d.disadvantage/d.total)*100);
                    console.log(d);
                    return "Away disadvantage: " + dis_percAway + "%";
                });
          });


    }



  function type(d, i, columns) {
    for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
    d.total = t;
    return d;
  }

  select
      .on("change", function(d) {
        name = d3.select(this.options);
        value = d3.select(this).property("value");
        console.log(name);
        console.log(value);
        draw(value);
      });
  draw("ATL");
