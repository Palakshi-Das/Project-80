var guest_list=[];

function button_submit(){
    var name=document.getElementById("submit").value;
    guest_list.push(name);
    document.getElementById("display1").innerHTML=guest_list;
    document.getElementById("submit").value="";
}

function button_show(){
     display_name_array=[];

    var lenght_array=guest_list.length;

    for (var k=0; k<lenght_array; k++){
        display_name_array.push("<h4>"+guest_list[k]+"</h4>");
        console.log (display_name_array);
    }

    var remove_commas=display_name_array.join(" ");
    document.getElementById("display2").innerHTML=remove_commas;


    document.getElementById("Button_sort").style.display="inline-block";
}

    function sorting(){
        sorted_guest_list=Array.from(display_name_array);
        sorted_guest_list.sort();

        var remove_commas=sorted_guest_list.join(" ");
    document.getElementById("display3").innerHTML=remove_commas;

    }

    function button_search(){
        var count=0;
        for(i=0;i<guest_list.length;i++){
            if(document.getElementById("search_input").value==guest_list[i]){
                count=count+1;
                console.log(count);
            }
        }

        document.getElementById("display4").innerHTML="name found "+count+" times";
    }