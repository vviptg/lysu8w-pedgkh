 
        let dashboard: Object = BoldBI.create({ 
                                serverUrl: "https://demo.boldbi.com/bi", 
                                dashboardId: "", 
                                embedContainerId:"dashboard", 
                                embedType: BoldBI.EmbedType.Component, 
                                environment: BoldBI.Environment.Cloud, 
                                width:"100%", 
                                height:"937px", 
                                expirationTime: 100000, 
                                mode: BoldBI.Mode.Design, 
                                authorizationServer: { 
                                    url: "https://samples.boldbi.com/Production/api/home/getdetails" 
                                    }, 
                                
                              }); 
                              dashboard.loadDesigner();
loadDesigner //////
();
loadDesigner: any;
[x: string]: any;