<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

require_once __DIR__ . '/../class-adeliom-acf-field-icon-library.php';

class ACF_Icon_Font_Awesome_Free extends \ACF_icon_library
{
    /**
     * @throws JsonException
     */
    public function __construct()
    {
        parent::__construct(
            'Font Awesome',
            'fa'
        );

        $this->setResolver('//cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/svgs/{{subset}}/{{name}}.svg');
        $subsets = [
            'regular' => [
                'name' => 'Regular',
                'prefix' => 'far',
            ],
            'solid' => [
                'name' => 'Solid',
                'prefix' => 'fas',
            ],
            'brands' => [
                'name' => 'Brands',
                'prefix' => 'fab',
            ],
        ];
        $this->setSubsets($subsets);

        if(!apply_filters('acf/icon_field/use_cache', true)){
            delete_transient('acf/font_awesome_free_icons');
        }

        if ( false === ( $font_awesome_icons = get_transient( 'acf/font_awesome_free_icons' ) ) ) {
            $font_awesome_icons = array_reduce(self::get_icons_from_api(), static function ($icons, $icon) use ($subsets) {
                foreach ($icon['familyStylesByLicense']['free'] as $style) {
                    $prefix = $style['prefix'];
                    $subset = array_search($prefix, array_column($subsets, 'prefix'), true);
                    $icons[] = [
                        'id' => $icon['id'],
                        'name' => $icon['label'],
                        'subset' => $subset,
                        'prefix' => $prefix
                    ];
                }
                return $icons;
            }, []);
            set_transient( 'acf/font_awesome_free_icons', $font_awesome_icons, 12 * HOUR_IN_SECONDS );
        }

        $this->setIcons($font_awesome_icons);

    }

    /**
     * @throws JsonException
     */
    private static function get_icons_from_api()
    {
        $request = \wp_remote_post('https://api.fontawesome.com', [
            'accept' => 'application/json',
            'body' => [
                "query" => '{
                 release(version: "6.x") {
                  icons(license: "free") {
                    id
                    label,
                    familyStylesByLicense {
                      free {prefix}
                    }
                  }
                 }
                }'
            ]
        ]);

        if( is_wp_error( $request ) ) {
            return false; // Bail early
        }

        $body = wp_remote_retrieve_body( $request );
        $data = json_decode($body, true, 512, JSON_THROW_ON_ERROR);
        return $data['data']['release']['icons'];
    }
}