/**
 * Included when icon_field fields are rendered for editing by publishers.
 */
 ( function( $ ) {
	function initialize_field( $field ) {
		/**
		 * $field is a jQuery object wrapping field elements in the editor.
		 */
		console.log( 'icon_field field initialized', $field);
	}

	if( typeof acf.add_action !== 'undefined' ) {
		/**
		 * Run initialize_field when existing fields of this type load,
		 * or when new fields are appended via repeaters or similar.
		 */
		acf.add_action( 'ready_field/type=icon', initialize_field );
		acf.add_action( 'append_field/type=icon', initialize_field );
	}
} )( jQuery );
