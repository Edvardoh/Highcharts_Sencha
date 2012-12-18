/**
 * @author Joe Kuan (much improved & ported from ExtJs 3 highchart adapter)
 * @email kuan.joe@gmail.com
 * @version 2.2.3
 * @date 1 Dec 2012
 *
 * Highcharts extension for Sencha Ext JS 4 and Touch 2
 *
 * You are not permitted to remove the author section from this file.
 */

/**
 * @class Chart.ux.Highcharts.SplineSerie
 * @extends Chart.ux.Highcharts.Serie
 * SplineSerie class for the charts widget.
 * @constructor
 */
Ext.define('Chart.ux.Highcharts.SplineSerie', {
	extend : 'Chart.ux.Highcharts.Serie',
	alternateClassName: [ 'highcharts.spline' ],
	type : 'spline'
});