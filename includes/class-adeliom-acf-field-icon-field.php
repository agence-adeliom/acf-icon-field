<?php
/**
 * Defines the custom field type class.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * adeliom_acf_field_icon_field class.
 */
class adeliom_acf_field_icon_field extends \acf_field {
	/**
	 * Controls field type visibilty in REST requests.
	 *
	 * @var bool
	 */
	public $show_in_rest = true;

	/**
	 * Constructor.
	 */
	public function __construct() {
        /**
		 * Field type reference used in PHP and JS code.
		 *
		 * No spaces. Underscores allowed.
		 */
		$this->name = 'icon';

		/**
		 * Field type label.
		 *
		 * For public-facing UI. May contain spaces.
		 */
		$this->label = __( 'Icon', 'adeliom-icon' );

		/**
		 * The category the field appears within in the field type picker.
		 */
		$this->category = 'content'; // basic | content | choice | relational | jquery | layout | CUSTOM GROUP NAME

		/**
		 * Field type Description.
		 *
		 * For field descriptions. May contain spaces.
		 */
		$this->description = __( 'A custom field that allow to pick an Icon from your libraries', 'adeliom-icon' );

		/**
		 * Field type Doc URL.
		 *
		 * For linking to a documentation page. Displayed in the field picker modal.
		 */
		$this->doc_url = '';

		/**
		 * Field type Tutorial URL.
		 *
		 * For linking to a tutorial resource. Displayed in the field picker modal.
		 */
		$this->tutorial_url = '';

		/**
		 * Defaults for your custom user-facing settings for this field type.
		 */
		$this->defaults = [
            "exclude" => []
        ];

		/**
		 * Strings used in JavaScript code.
		 *
		 * Allows JS strings to be translated in PHP and loaded in JS via:
		 *
		 * ```js
		 * const errorMessage = acf._e("icon", "error");
		 * ```
		 */
		$this->l10n = [
            'button' => __( 'Choose an Icon', 'adeliom-icon' ),
            'dialog' => __( 'Choose an Icon', 'adeliom-icon' ),
            'placeholder' => __( 'Search', 'adeliom-icon' ),
        ];

		/**
		 * Field type preview image.
		 *
		 * A preview image for the field type in the picker modal.
		 */
		$this->preview_image = ACF_ICON_FIELD_URL . '/assets/images/field-preview-custom.png';

		parent::__construct();
    }

	/**
	 * Settings to display when users configure a field of this type.
	 *
	 * These settings appear on the ACF “Edit Field Group” admin page when
	 * setting up the field.
	 *
	 * @param array $field
	 * @return void
	 */
	public function render_field_settings( $field ) {

        global $acf_icon_field_registry;
        $libraries = $acf_icon_field_registry->getLibraries();
        $choices = [];

        if ( ! empty( $libraries ) ) {
            foreach ( $libraries as $k => $v ) {
                $choices[ $k ] = $v->getName();
                foreach ($v->getSubsets() as $subset => $data) {
                    $choices[ $k . '/' . $subset ] = $v->getName() . ' - ' . $data['name'] ?? $subset;
                }
            }
        }

		/*
		 * Repeat for each setting you wish to display for this field type.
		 */
        acf_render_field_setting( $field, array(
            'label'        => __( 'Exclude Libraries / Subset', 'adeliom-icon' ),
            'instructions' => __( 'Select libraries or subsets to exclude', 'adeliom-icon' ),
            'name'         => 'exclude',
            'type'         => 'select',
            'multiple'     => true,
            'ui'           => true,
            'choices'      => $choices
        ) );
		// To render field settings on other tabs in ACF 6.0+:
		// https://www.advancedcustomfields.com/resources/adding-custom-settings-fields/#moving-field-setting
	}

	/**
	 * HTML content to show when a publisher edits the field on the edit screen.
	 *
	 * @param array $field The field settings and values.
	 * @return void
	 */
	public function render_field( $field ) {
		?>
        <div class="acf-icon-wrapper"
             data-name="<?php echo esc_attr($field['name']) ?>"
             data-value="<?php echo esc_attr($field['value']) ?>"
             data-exclude="<?php echo esc_attr(json_encode($field['exclude'])) ?>"
        ></div>
		<input
			type="hidden"
			name="<?php echo esc_attr($field['name']) ?>"
			value="<?php echo esc_attr($field['value']) ?>"
		/>
		<?php
	}

	/**
	 * Enqueues CSS and JavaScript needed by HTML in the render_field() method.
	 *
	 * Callback for admin_enqueue_script.
	 *
	 * @return void
	 */
	public function input_admin_enqueue_scripts() {
		$url     = trailingslashit( ACF_ICON_FIELD_URL );

		wp_register_script(
			'adeliom-icon-field',
			"{$url}dist/app.js",
            ['adeliom-icon-libraries', 'acf-input'],
            ACF_ICON_FIELD_VERSION
		);

		wp_register_style(
			'adeliom-icon-field',
			"{$url}dist/app.css",
			['acf-input'],
            ACF_ICON_FIELD_VERSION
		);

		wp_enqueue_script( 'adeliom-icon-field' );
		wp_enqueue_style( 'adeliom-icon-field' );
	}
}
