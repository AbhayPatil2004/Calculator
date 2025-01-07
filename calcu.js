
const buttons = document.querySelectorAll("button");

function calculateExpression(text) {

    let result = "" ;

    if( text.includes("sin") || text.includes("cos") || text.includes("tan") || text.includes("log")){
        let ope = "" ;
        let angle = 0 ;

        for( let i = 0 ; i < text.length ; i++ ){

            let ch = text[i] ;
            if( (ch >= '0' && ch <= '9' ) || ch == '.' ){
                angle += ch ;
            }
            else if( ch != '(' && ch != ')' ){
                ope += ch ;
            }
        }
        let radian = angle * ( Math.PI / 180 );
        if( ope == "sin" ){
            result = Math.sin(radian) ;
        }
        else if( ope == "cos" ){
            result = Math.cos(radian) ;
        }
        else if( ope == "tan" ){
            result = Math.tan(radian) ;
        }
        else{
            let num = angle ;
            result = Math.log(num) ;
        }
    }

    else{
        let num1 = 0 ;
        let num2 = 0 ;
        let check = true ;
        let ope = "" ;

        for ( let i = 0 ; i < text.length ; i++ ){
            let ch = text[i] ;
            if( ( ch >= 0 && ch <= 9 && check ) || ch == '.' ){
                num1 += ch ;
            }
            else if( check ){
                ope = ch ;
                check = false ;
            }
            else{
                num2 += ch ;
            }
        }

        num1 = Number(num1); 
        num2 = Number(num2); 
        
        if( ope == '+' ){
            result = num1 + num2 ;
        }
        else if( ope == '-' ){
            result = num1 - num2 ;
        }
        else if( ope == 'X' ){
            result = num1 * num2 ;
        }
        else{
            if( num2 == 0 ){
                result = 0 ;
            }
            else{
                result = num1 / num2 ;
            }
        }
    }
    
    return result ;
}

function handleClick( event ){

    let para = document.querySelector("p");
    const text = event.target.innerText ;

    if( text == '=' ){
        let str = para.innerText ;
        let ans = calculateExpression(str);
        para.innerText = ans ;
    }
    else if( text == "C" ){
        para.innerText = "";
    }
    else{
        para.innerText += `${text}`; 
    }
    
}

buttons.forEach(btn => {
    btn.addEventListener("click", handleClick);
});