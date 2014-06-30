/**
 * Created by amit on 18/6/14.
 */
"use strict";
var optionSelected = false;
var selectedColor = '';
$(document).ready(function () {

    $("input").click(function () {
        optionSelected = true;
        //console.log("clicked");
        selectedColor = this.value;
        //console.log(this.value);
    });

    $(".number").click(function () {
        if (optionSelected) {

            console.log($(this).attr("style"));
            if ($(this).attr("style")) {

                alert($(this).attr("style") + "Color Already Applied.");
            }
            else {
                $(this).css('background-color', selectedColor);
            }
        }
        else {
            alert("Please Select the Color.")
        }
    });

    $("#reset").click(function () {
        $("li").css("color","black");
        optionSelected = false;
        selectedColor ='';
        $("input").attr("name","color").attr("checked",false);
        $(".number").removeAttr("style");
    })

});