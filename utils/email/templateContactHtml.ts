export const templateContactHtml = (messageData: any) => {
    return `
    <!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>NUEVO PEDIDO</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
                line-height: 1.5;
            }
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
            }
    
            .header {
                text-align: left;
                padding-bottom: 20px;
            }
    
            .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 900;
            }
    
            .content {
                padding: 20px 0;
                border-top: 1px solid #ccc;
            }
    
            .personal-info {
                margin-bottom: 15px;
                color: #3a3a3a;
            }

            .personal-info ul{
                padding-left: 10px;
            }
    
            .personal-info li {
                margin-bottom: 5px;
                color: #3a3a3a;
                font-weight: 500;
            }
        
            .link {
                color: #007bff;
                text-decoration: none;
            }

            .footer {
                text-align: left;
                padding-bottom:20px;
                border-bottom: 1px solid #ccc;
            }

            .footer p {
                list-style-type: none;
                margin-bottom: 5px;
                color: #3a3a3a;
            }

            .secondaryFooter p {
                color: #3a3a3a;
                font-weight: 500;
                margin: 0;
                padding: 0;
                padding-top: 60px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>STRONGWOOD</h1>
            </div>
            <div class="content">
                <div class="personal-info">
                    <h3>Datos personales:</h3>
                    <ul>
                        <li><strong>Nombre: </strong>${messageData.name}</li>
                        <li><strong>Email: </strong><a href="mailto:${messageData.email}" class="link">${messageData.email}</a></li>
                        <li><strong>Teléfono: </strong><a href="https://wa.me/${messageData.phone}" class="link">${messageData.phone}</a></li>
                        <li><strong>Localidad: </strong>${messageData.location}</li>
                        <li><strong>Dirección: </strong>${messageData.direction}</li>
                    </ul>
                </div>
            </div>
            <div class="footer">
                <h3>Nota:</h3>
                <p>${messageData.note}</p>
            </div>
            <div class="secondaryFooter">
                <p>Este mensaje se ha enviado desde un formulario de contacto en ( <strong class="link">https://strongwood.com.ar</strong> )</p>
            </div>
        </div>
    </body>
    </html>
    `
}