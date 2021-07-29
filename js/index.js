window.onload = function () {
    var menu = document.getElementById("menu");
    menu.addEventListener("click", function () {
        if (document.getElementById("nav").style.width == "0%") {
            document.getElementById("nav").style.width = "10%";
        } else {
            document.getElementById("nav").style.width = "0%";
        }
    });

    var nav1 = document.getElementById("nav1");
    var nav2 = document.getElementById("nav2");
    var nav3 = document.getElementById("nav3");
    var nav4 = document.getElementById("nav4");
    var nav5 = document.getElementById("nav5");



    document.getElementById("navHome").addEventListener("click", function () {
        nav1.style.opacity = "1";
        nav1.style.zIndex = "2";

        nav2.style.opacity = "0";
        nav2.style.zIndex = "0";

        nav3.style.opacity = "0";
        nav3.style.zIndex = "0";

        nav4.style.opacity = "0";
        nav4.style.zIndex = "0";

        nav5.style.opacity = "0";
        nav5.style.zIndex = "0";

        document.getElementById("body").style.backgroundColor = "burlywood";
        document.getElementById("navHome").style.backgroundColor = "burlywood";
        document.getElementById("navHome").style.color = "#010016";
        document.getElementById("navCV").style.backgroundColor = "rgb(15, 9, 104)";
        document.getElementById("navCV").style.color = "cornsilk";
        document.getElementById("navBlog").style.backgroundColor = "rgb(15, 9, 104)";
        document.getElementById("navBlog").style.color = "cornsilk";
        document.getElementById("navRes").style.backgroundColor = "rgb(15, 9, 104)";
        document.getElementById("navRes").style.color = "cornsilk";
        document.getElementById("navCon").style.backgroundColor = "rgb(15, 9, 104)";
        document.getElementById("navCon").style.color = "cornsilk";

    });

    document.getElementById("navCV").addEventListener("click", function () {
        nav1.style.opacity = "0";
        nav1.style.zIndex = "0";

        nav2.style.opacity = "1";
        nav2.style.zIndex = "2";

        nav3.style.opacity = "0";
        nav3.style.zIndex = "0";

        nav4.style.opacity = "0";
        nav4.style.zIndex = "0";

        nav5.style.opacity = "0";
        nav5.style.zIndex = "0";

        document.getElementById("body").style.backgroundColor = "#f3e5ab";
        document.getElementById("navHome").style.backgroundColor = "rgb(15, 9, 104)";
        document.getElementById("navHome").style.color = "cornsilk";
        document.getElementById("navCV").style.backgroundColor = "#f3e5ab";
        document.getElementById("navCV").style.color = "#010016";
        document.getElementById("navBlog").style.backgroundColor = "rgb(15, 9, 104)";
        document.getElementById("navBlog").style.color = "cornsilk";
        document.getElementById("navRes").style.backgroundColor = "rgb(15, 9, 104)";
        document.getElementById("navRes").style.color = "cornsilk";
        document.getElementById("navCon").style.backgroundColor = "rgb(15, 9, 104)";
        document.getElementById("navCon").style.color = "cornsilk";
    });

    document.getElementById("navBlog").addEventListener("click", function () {
        nav1.style.opacity = "0";
        nav1.style.zIndex = "0";

        nav2.style.opacity = "0";
        nav2.style.zIndex = "0";

        nav3.style.opacity = "1";
        nav3.style.zIndex = "2";

        nav4.style.opacity = "0";
        nav4.style.zIndex = "0";

        nav5.style.opacity = "0";
        nav5.style.zIndex = "0";

        document.getElementById("body").style.backgroundColor = "#202020";
        document.getElementById("navHome").style.backgroundColor = "rgb(15, 9, 104)";
        document.getElementById("navHome").style.color = "cornsilk";
        document.getElementById("navCV").style.backgroundColor = "rgb(15, 9, 104)";
        document.getElementById("navCV").style.color = "cornsilk";
        document.getElementById("navBlog").style.backgroundColor = "#202020";
        document.getElementById("navBlog").style.color = "cornsilk";
        document.getElementById("navRes").style.backgroundColor = "rgb(15, 9, 104)";
        document.getElementById("navRes").style.color = "cornsilk";
        document.getElementById("navCon").style.backgroundColor = "rgb(15, 9, 104)";
        document.getElementById("navCon").style.color = "cornsilk";

    });

    document.getElementById("navRes").addEventListener("click", function () {
        nav1.style.opacity = "0";
        nav1.style.zIndex = "0";

        nav2.style.opacity = "0";
        nav2.style.zIndex = "0";

        nav3.style.opacity = "0";
        nav3.style.zIndex = "0";

        nav4.style.opacity = "1";
        nav4.style.zIndex = "2";

        nav5.style.opacity = "0";
        nav5.style.zIndex = "0";

        document.getElementById("body").style.backgroundColor = "#625264";
        document.getElementById("navHome").style.backgroundColor = "rgb(15, 9, 104)";
        document.getElementById("navHome").style.color = "cornsilk";
        document.getElementById("navCV").style.backgroundColor = "rgb(15, 9, 104)";
        document.getElementById("navCV").style.color = "cornsilk";
        document.getElementById("navBlog").style.backgroundColor = "rgb(15, 9, 104)";
        document.getElementById("navBlog").style.color = "cornsilk";
        document.getElementById("navRes").style.backgroundColor = "#625264";
        document.getElementById("navRes").style.color = "cornsilk";
        document.getElementById("navCon").style.backgroundColor = "rgb(15, 9, 104)";
        document.getElementById("navCon").style.color = "cornsilk";
    });

    document.getElementById("navCon").addEventListener("click", function () {
        nav1.style.opacity = "0";
        nav1.style.zIndex = "0";

        nav2.style.opacity = "0";
        nav2.style.zIndex = "0";

        nav3.style.opacity = "0";
        nav3.style.zIndex = "0";

        nav4.style.opacity = "0";
        nav4.style.zIndex = "0";

        nav5.style.opacity = "1";
        nav5.style.zIndex = "2";

        document.getElementById("body").style.backgroundColor = "#d7ebf0";
        document.getElementById("navHome").style.backgroundColor = "rgb(15, 9, 104)";
        document.getElementById("navHome").style.color = "cornsilk";
        document.getElementById("navCV").style.backgroundColor = "rgb(15, 9, 104)";
        document.getElementById("navCV").style.color = "cornsilk";
        document.getElementById("navBlog").style.backgroundColor = "rgb(15, 9, 104)";
        document.getElementById("navBlog").style.color = "cornsilk";
        document.getElementById("navRes").style.backgroundColor = "rgb(15, 9, 104)";
        document.getElementById("navRes").style.color = "cornsilk";
        document.getElementById("navCon").style.backgroundColor = "#d7ebf0";
        document.getElementById("navCon").style.color = "#010016";
    });

    var blogPara1 = document.getElementById("blogPara1");
    var blogPara2 = document.getElementById("blogPara2");
    var blogPara3 = document.getElementById("blogPara3");
    var blogPara4 = document.getElementById("blogPara4");

    blogPara1.addEventListener("click", function () {
        if (blogPara1.style.width == "100%") {
            blogPara1.style.height = "15%";
            blogPara1.style.width = "15%";
            blogPara1.style.borderRadius = "0.5em";
            blogPara1.innerHTML = "First Paragraph";
            blogPara2.style.opacity = "1";
            blogPara3.style.opacity = "1";
            blogPara4.style.opacity = "1";
            blogPara1.style.zIndex = "0";
            blogPara1.style.backgroundColor = "rgba(68, 64, 64, 0.384)";
        } else {
            blogPara1.style.height = "50%";
            blogPara1.style.width = "100%";
            blogPara1.style.borderRadius = "2em";
            blogPara2.style.opacity = "0";
            blogPara3.style.opacity = "0";
            blogPara4.style.opacity = "0";
            blogPara1.style.zIndex = "1";
            blogPara1.style.backgroundColor = "#202020";
            blogPara1.innerHTML = "Technology is the application of scientific knowledge to the practical aims of human life or, as it is sometimes phrased, to the change and manipulation of the human environment. It is what allows us to exist in this digital day and age. Among all of the various technologies introduced to the world, internet technologies are one of the most impactful technologies. Internet technologies are the group of technologies that allow users to access information and communication over the World Wide Web. This includes Web browsers, ftp, e-mail, associated hardware, Internet service providers, and so forth. Web technologies have facilitated the development of publication sites with elegant graphic design, intuitive semiotics, refined interactivity, infallible availability, guaranteed evolutivity, which are completely compatible with the habits of users accustomed to the social Web. The earliest versions of HyperText Markup Language (HTML), which historical publishers (Microsoft and Netscape) transformed as they saw fit1 to ensure a “captive” audience, have given way to much more structured versions, conforming to the recommendations of the W3 (HTML 4.01, eXtensible HyperText Markup Language (XHTML) and HTML5). These versions, implemented in the latest-generation browsers (Chrome, Safari, Firefox, Opera, etc.), are stricter from a syntactical viewpoint. Inspired by Extensible Markup Language (XML), they extend the separation of the logical structuring of content and the formatting properties.";
        }
    });

    blogPara2.addEventListener("click", function () {
        if (blogPara2.style.width == "100%") {
            blogPara2.style.height = "15%";
            blogPara2.style.width = "15%";
            blogPara2.style.borderRadius = "0.5em";
            blogPara2.innerHTML = "Second Paragraph";
            blogPara1.style.opacity = "1";
            blogPara3.style.opacity = "1";
            blogPara4.style.opacity = "1";
            blogPara2.style.zIndex = "0";
            blogPara2.style.backgroundColor = "rgba(68, 64, 64, 0.384)";
        } else {
            blogPara2.style.height = "50%";
            blogPara2.style.width = "100%";
            blogPara2.style.borderRadius = "2em";
            blogPara1.style.opacity = "0";
            blogPara3.style.opacity = "0";
            blogPara4.style.opacity = "0";
            blogPara2.style.zIndex = "1";
            blogPara2.style.backgroundColor = "#202020";
            blogPara2.innerHTML = "Let us begin by what technology gave us. All the basic requirements of mankind populating 7.8 billion till date, is fulfilled by various industries and farms. Besides basic survival, internet technologies have given everyone the right to open and free speech. Everyone has a platform to present their idea where other people can acknowledge them. Information from around the globe is accessible to anyone by just using a search engine. Global communication which was not even imaginable before in now within our reach. Various quality of life services such as e-banking, e-commerce, Telnet, etc. have been introduced. The internet Before the Internet came into existence, to communicate with someone far away, you would have to call them on a phone. Or if you wanted to send them a note you had to send a letter through snail mail. With the introduction of the Internet, we now have the ability to send and receive messages through electronic mail- virtually instantaneously. Nowadays, online banking is practically the norm. You log into your online accounts to pay bills, transfer funds, or just to check your balance. Prior to online banking, you would have to visit your local bank and wait in line for the next teller to have your transactions completed. With the Internet, you can avoid the line all together simply by remotely logging into your account and completing your transaction at any time of day or night. With the Internet came the convenience of online shopping. Rather than having to go to a mall to make a purchase, you can now do all of your shopping with a few clicks of the mouse while also having more options. ";
        }
    });

    blogPara3.addEventListener("click", function () {
        if (blogPara3.style.width == "100%") {
            blogPara3.style.height = "15%";
            blogPara3.style.width = "15%";
            blogPara3.style.borderRadius = "0.5em";
            blogPara3.innerHTML = "Third Paragraph";
            blogPara1.style.opacity = "1";
            blogPara2.style.opacity = "1";
            blogPara4.style.opacity = "1";
            blogPara3.style.zIndex = "0";
            blogPara3.style.backgroundColor = "rgba(68, 64, 64, 0.384)";
        } else {
            blogPara3.style.height = "50%";
            blogPara3.style.width = "100%";
            blogPara3.style.borderRadius = "2em";
            blogPara1.style.opacity = "0";
            blogPara2.style.opacity = "0";
            blogPara4.style.opacity = "0";
            blogPara3.style.zIndex = "1";
            blogPara3.style.backgroundColor = "#202020";
            blogPara3.innerHTML = "Internet Technology, however, has also introduced a lot of issues which previously didn’t exist. The ability to send and receive emails also created a means for cybercriminals to distribute spam and malware. Malware hiding in email attachments could wreak havoc to your PC or possibly even create a backdoor for an attacker to infiltrate your system. Through emails, cybercriminals saw this as another opportunity to play on human emotions and lure victims into revealing sensitive information through phishing scams. While the Internet brought upon efficiency and convenience of banking for consumers, this also gave cybercriminals a means to potentially steal your hard-earned cash. Cybercriminals could trick you into downloading a backdoor Trojan that would give them a back entry to your PC, where they could then record your banking credentials. Or, as mentioned in the section on “Electronic Communications”, cybercriminals could deceive you into revealing your credentials through a phishing scam. All of this could be done via the Internet without leaving any trace. While the Internet brought upon convenience for individuals to make online purchases, this also created yet another way for cybercriminals to steal personal information and to distribute malware. It also created yet another way for cybercriminals to steal personal information and to distribute malware.";
        }
    });

    blogPara4.addEventListener("click", function () {
        if (blogPara4.style.width == "100%") {
            blogPara4.style.height = "15%";
            blogPara4.style.width = "15%";
            blogPara4.style.borderRadius = "0.5em";
            blogPara4.innerHTML = "Fourth Paragraph";
            blogPara1.style.opacity = "1";
            blogPara2.style.opacity = "1";
            blogPara3.style.opacity = "1";
            blogPara4.style.zIndex = "0";
            blogPara4.style.backgroundColor = "rgba(68, 64, 64, 0.384)";
        } else {
            blogPara4.style.height = "50%";
            blogPara4.style.width = "100%";
            blogPara4.style.borderRadius = "2em";
            blogPara1.style.opacity = "0";
            blogPara2.style.opacity = "0";
            blogPara3.style.opacity = "0";
            blogPara4.style.zIndex = "1";
            blogPara4.style.backgroundColor = "#202020";
            blogPara4.innerHTML = "Thus, we can derive that internet technologies have aided in the development of people’s intellect and have made the lives of everyone much easier. Despite the various risks and issues, if used with proper caution, internet technologies can enhance both the efficiency and effectiveness of an individual. While the occurrences of phishing attack are quite common, they can be easily avoided by visiting only trusted websites and not carelessly leaking personal credentials on other sites. Similarly, the backdoor issue with e-banking can be prevented in a similar way and an addition of antivirus software on the device used for e-banking.  ";
        }
    });



}