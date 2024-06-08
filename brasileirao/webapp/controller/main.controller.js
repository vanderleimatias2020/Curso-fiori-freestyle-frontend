sap.ui.define([
    "sap/ui/core/mvc/Controller"
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
       "use strict";

        return Controller.extend("brasileirao.controller.main", {
            onInit: function () {

                var dadosGerais = {
                    nomeCampeonato : "Brasileirão 2023 no canal FioriNET",
                    rodada : 99
                };
                
                var dadosModel = new JSONModel();
                dadosModel.setData(dadosGerais);
                var tela = this.getView();
                tela.setModel(dadosModel, "ModeloDadosGerais")
                debugger

            }
        });
    });
