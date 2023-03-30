/* 
All of the functionality will be done in this client-side JS file.  
You will make client - side AJAX requests to the API and use jQuery to target and create elements on the page.
*/

$(document).ready(()=>{

    let showDisplay = {
        method: 'GET',
        url: 'http://api.tvmaze.com/shows',
        contentType: 'application/x-www-form-urlencoded',
    
    };
 
    $.ajax(showDisplay).then((responseMessage)=> {
        
        $("showList").empty();
        $.each(responseMessage,(index,element)=>{
               
            var showLink = $("<a>");
            showLink.text(element.name);
            showLink.attr("href", element._links.self.href);
            showLink.addClass("showLink");

            var itemList = $("<li/>");
            itemList.html(showLink);
 
            itemList.appendTo('ul#showList');
         
            $('ul#showList').show();
            $('#show').hide();
         })
        
        $('a.showLink').click((e)=>{
        e.preventDefault();
        clickedLink(e.target.href);

        })

    });
 
 
 
    $("#searchForm").submit(function (event) {
        event.preventDefault();
        
        let error=$("#errors")
        let errorDiv=$("#error-div")
         
        let search_term =$("#search_term").val();
 
        if(!search_term || search_term.trim().length===0){

            let errorr ='<li>Movie name is empty. Please give a non-empty movie name.</li>'
            error.append(errorr);
            errorDiv.show();

        }

        else{

            $("#showList").empty()
            errorDiv.empty()
 
            let url = `http://api.tvmaze.com/search/shows?q=${search_term}`
 
            var showDisplay = {
                method: 'GET',
                url: url,
                contentType: 'application/x-www-form-urlencoded',
            };
             
            $.ajax(showDisplay).then((data)=>{
                $.each(data,(index,element)=>{
               
                    
                    var showLink = $("<a>");
                    showLink.text(element.show.name);
                    showLink.attr("href", element.show._links.self.href);
                    showLink.addClass("showLink");
                         
                    
                    var itemList = $("<li/>");
                    itemList.html(showLink);
             
                    
                    itemList.appendTo('ul#showList')
                     
 
                     
                    $('ul#showList').show();
                    $('#show').hide();

                })
                    
                $('a.showLink').click((e)=>{
                e.preventDefault();
                clickedLink(e.target.href);
                })
                      
                $('#homeLink').show();
             
            })
              
        }
       
    });
 
 
    const clickedLink=(url)=>{
        
        var show =$('#show');
        $('ul#showList').hide();
        $('#show').empty();
 
        var showDisplay = {
            method: 'GET',
            url: url,
            contentType: 'application/x-www-form-urlencoded',
        
        };
         
        $.ajax(showDisplay).then((data)=>{
             
            let h1 = `<h1>${data.name}</h1>`
            let src= !data.image || !data.image.medium || data.image===null? "/public/image_unavailable.jpeg":data.image.medium
            let img=`<img alt="Movie Poster" src='${src}' />`
            /*
            
            let imagee;
            if((!data.image) || (!data.image.medium) || (data.image === null)){

                imagee = "/static/no_image.jpeg";

            }

            else{

                imagee = data.image.medium;

            }

            */

            let dl= $('<dl></dl>')
            let language='<dt>Language</dt>'
            let genres='<dt>Genres</dt>'
            let summary='<dt>Summary</dt>'
            let network='<dt>Network</dt>'
            let averageRatings='<dt>Average Rating</dt>'

            if(!data.language){

                existLanguage = "N/A";

            }

            else{

                existLanguage = data.language;

            }
 
            let languageData=`<dd>${existLanguage}</dd>`
             
            if(!data.rating || !data.rating.average || data.rating===null){

                averRating = "N/A";

            }

            else{

                averRating = data.rating.average;

            }
             
            let dataAverageRating=`<dd>${averRating}</dd>`

            if(!data.network||!data.network.name||data.network===null){

                netData = "N/A";

            }

            else{

                netData = data.network.name;

            }

            let networkData=`<dd>${netData}</dd>`
 
            if(!data.summary){

                sumData = "N/A";

            }

            else{

                sumData = data.summary;

            }

            let summaryData=`<dd>${sumData}</dd>`
            let dd=$('<dd></dd>')
            let ul=$('<ul></ul>')
 
            data.genres.map((element)=>{
                let li=$(`<li>${element}</li>`)
                ul.append(li)
            })
            
            dd.append(ul)
 
            dl.append(language)
            dl.append(languageData)
            dl.append(genres)
            dl.append(dd)
            dl.append(averageRatings)
            dl.append(dataAverageRating)
            dl.append(network)
            dl.append(networkData)
            dl.append(summary)
            dl.append(summaryData)
        
            show.append(h1)
            show.append(img)
            show.append(dl)
            show.show()
            $('#homeLink').show()

        })
 
    }
})