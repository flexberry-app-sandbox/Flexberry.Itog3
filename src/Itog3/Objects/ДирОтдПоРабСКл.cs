﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Itog3
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Дир отд по раб с кл.
    /// </summary>
    // *** Start programmer edit section *** (ДирОтдПоРабСКл CustomAttributes)

    // *** End programmer edit section *** (ДирОтдПоРабСКл CustomAttributes)
    [AutoAltered()]
    [Caption("Дир отд по раб с кл")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ДирОтдПоРабСКлE", new string[] {
            "idДиректора as \'Id директора\'",
            "Фамилия as \'Фамилия\'",
            "Имя as \'Имя\'",
            "Отчество as \'Отчество\'",
            "НомерТел as \'Номер тел\'",
            "СерияПаспорта as \'Серия паспорта\'",
            "НомерПаспорта as \'Номер паспорта\'"})]
    [View("ДирОтдПоРабСКлL", new string[] {
            "idДиректора as \'Id директора\'",
            "Фамилия as \'Фамилия\'",
            "Имя as \'Имя\'",
            "Отчество as \'Отчество\'",
            "НомерТел as \'Номер тел\'",
            "СерияПаспорта as \'Серия паспорта\'",
            "НомерПаспорта as \'Номер паспорта\'"})]
    public class ДирОтдПоРабСКл : ICSSoft.STORMNET.DataObject
    {
        
        private string fidДиректора;
        
        private string fФамилия;
        
        private string fИмя;
        
        private string fОтчество;
        
        private string fНомерТел;
        
        private string fСерияПаспорта;
        
        private string fНомерПаспорта;
        
        // *** Start programmer edit section *** (ДирОтдПоРабСКл CustomMembers)

        // *** End programmer edit section *** (ДирОтдПоРабСКл CustomMembers)

        
        /// <summary>
        /// idДиректора.
        /// </summary>
        // *** Start programmer edit section *** (ДирОтдПоРабСКл.idДиректора CustomAttributes)

        // *** End programmer edit section *** (ДирОтдПоРабСКл.idДиректора CustomAttributes)
        [StrLen(255)]
        public virtual string idДиректора
        {
            get
            {
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.idДиректора Get start)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.idДиректора Get start)
                string result = this.fidДиректора;
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.idДиректора Get end)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.idДиректора Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.idДиректора Set start)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.idДиректора Set start)
                this.fidДиректора = value;
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.idДиректора Set end)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.idДиректора Set end)
            }
        }
        
        /// <summary>
        /// Имя.
        /// </summary>
        // *** Start programmer edit section *** (ДирОтдПоРабСКл.Имя CustomAttributes)

        // *** End programmer edit section *** (ДирОтдПоРабСКл.Имя CustomAttributes)
        [StrLen(255)]
        public virtual string Имя
        {
            get
            {
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.Имя Get start)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.Имя Get start)
                string result = this.fИмя;
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.Имя Get end)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.Имя Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.Имя Set start)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.Имя Set start)
                this.fИмя = value;
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.Имя Set end)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.Имя Set end)
            }
        }
        
        /// <summary>
        /// НомерПаспорта.
        /// </summary>
        // *** Start programmer edit section *** (ДирОтдПоРабСКл.НомерПаспорта CustomAttributes)

        // *** End programmer edit section *** (ДирОтдПоРабСКл.НомерПаспорта CustomAttributes)
        [StrLen(255)]
        public virtual string НомерПаспорта
        {
            get
            {
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.НомерПаспорта Get start)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.НомерПаспорта Get start)
                string result = this.fНомерПаспорта;
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.НомерПаспорта Get end)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.НомерПаспорта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.НомерПаспорта Set start)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.НомерПаспорта Set start)
                this.fНомерПаспорта = value;
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.НомерПаспорта Set end)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.НомерПаспорта Set end)
            }
        }
        
        /// <summary>
        /// НомерТел.
        /// </summary>
        // *** Start programmer edit section *** (ДирОтдПоРабСКл.НомерТел CustomAttributes)

        // *** End programmer edit section *** (ДирОтдПоРабСКл.НомерТел CustomAttributes)
        [StrLen(255)]
        public virtual string НомерТел
        {
            get
            {
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.НомерТел Get start)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.НомерТел Get start)
                string result = this.fНомерТел;
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.НомерТел Get end)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.НомерТел Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.НомерТел Set start)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.НомерТел Set start)
                this.fНомерТел = value;
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.НомерТел Set end)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.НомерТел Set end)
            }
        }
        
        /// <summary>
        /// Отчество.
        /// </summary>
        // *** Start programmer edit section *** (ДирОтдПоРабСКл.Отчество CustomAttributes)

        // *** End programmer edit section *** (ДирОтдПоРабСКл.Отчество CustomAttributes)
        [StrLen(255)]
        public virtual string Отчество
        {
            get
            {
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.Отчество Get start)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.Отчество Get start)
                string result = this.fОтчество;
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.Отчество Get end)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.Отчество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.Отчество Set start)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.Отчество Set start)
                this.fОтчество = value;
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.Отчество Set end)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.Отчество Set end)
            }
        }
        
        /// <summary>
        /// СерияПаспорта.
        /// </summary>
        // *** Start programmer edit section *** (ДирОтдПоРабСКл.СерияПаспорта CustomAttributes)

        // *** End programmer edit section *** (ДирОтдПоРабСКл.СерияПаспорта CustomAttributes)
        [StrLen(255)]
        public virtual string СерияПаспорта
        {
            get
            {
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.СерияПаспорта Get start)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.СерияПаспорта Get start)
                string result = this.fСерияПаспорта;
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.СерияПаспорта Get end)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.СерияПаспорта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.СерияПаспорта Set start)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.СерияПаспорта Set start)
                this.fСерияПаспорта = value;
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.СерияПаспорта Set end)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.СерияПаспорта Set end)
            }
        }
        
        /// <summary>
        /// Фамилия.
        /// </summary>
        // *** Start programmer edit section *** (ДирОтдПоРабСКл.Фамилия CustomAttributes)

        // *** End programmer edit section *** (ДирОтдПоРабСКл.Фамилия CustomAttributes)
        [StrLen(255)]
        public virtual string Фамилия
        {
            get
            {
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.Фамилия Get start)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.Фамилия Get start)
                string result = this.fФамилия;
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.Фамилия Get end)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.Фамилия Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.Фамилия Set start)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.Фамилия Set start)
                this.fФамилия = value;
                // *** Start programmer edit section *** (ДирОтдПоРабСКл.Фамилия Set end)

                // *** End programmer edit section *** (ДирОтдПоРабСКл.Фамилия Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ДирОтдПоРабСКлE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДирОтдПоРабСКлE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДирОтдПоРабСКлE", typeof(IIS.Itog3.ДирОтдПоРабСКл));
                }
            }
            
            /// <summary>
            /// "ДирОтдПоРабСКлL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДирОтдПоРабСКлL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДирОтдПоРабСКлL", typeof(IIS.Itog3.ДирОтдПоРабСКл));
                }
            }
        }
    }
}
