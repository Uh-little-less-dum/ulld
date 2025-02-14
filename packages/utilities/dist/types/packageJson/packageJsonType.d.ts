import { z } from "zod";
export declare const ulldCompletePackageJsonSchema: z.ZodObject<{
    name: z.ZodEffects<z.ZodString, string, string>;
    version: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    exports: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodObject<{
        types: z.ZodOptional<z.ZodString>;
        import: z.ZodOptional<z.ZodString>;
        require: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        import?: string | undefined;
        types?: string | undefined;
        require?: string | undefined;
    }, {
        import?: string | undefined;
        types?: string | undefined;
        require?: string | undefined;
    }>]>>>;
    files: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    dependencies: z.ZodRecord<z.ZodString, z.ZodString>;
    packageManager: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    devDependencies: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    peerDependencies: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    peerDependenciesMeta: z.ZodOptional<z.ZodAny>;
    optionalDependencies: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    bundleDependencies: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    type: z.ZodOptional<z.ZodString>;
    scripts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    private: z.ZodOptional<z.ZodBoolean>;
    os: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    cpu: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    workspaces: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    funding: z.ZodOptional<z.ZodObject<{
        type: z.ZodUnion<[z.ZodLiteral<"individual">, z.ZodLiteral<"patreon">]>;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "patreon" | "individual";
        url: string;
    }, {
        type: "patreon" | "individual";
        url: string;
    }>>;
    main: z.ZodOptional<z.ZodString>;
    bin: z.ZodOptional<z.ZodString>;
    man: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    keywords: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodString, "many">>, string[], string[] | undefined>;
    homepage: z.ZodOptional<z.ZodString>;
    license: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"0BSD">, z.ZodLiteral<"AAL">, z.ZodLiteral<"Abstyles">, z.ZodLiteral<"AdaCore-doc">, z.ZodLiteral<"Adobe-2006">, z.ZodLiteral<"Adobe-Display-PostScript">, z.ZodLiteral<"Adobe-Glyph">, z.ZodLiteral<"Adobe-Utopia">, z.ZodLiteral<"ADSL">, z.ZodLiteral<"AFL-1.1">, z.ZodLiteral<"AFL-1.2">, z.ZodLiteral<"AFL-2.0">, z.ZodLiteral<"AFL-2.1">, z.ZodLiteral<"AFL-3.0">, z.ZodLiteral<"Afmparse">, z.ZodLiteral<"AGPL-1.0-only">, z.ZodLiteral<"AGPL-1.0-or-later">, z.ZodLiteral<"AGPL-3.0-only">, z.ZodLiteral<"AGPL-3.0-or-later">, z.ZodLiteral<"Aladdin">, z.ZodLiteral<"AMDPLPA">, z.ZodLiteral<"AML">, z.ZodLiteral<"AML-glslang">, z.ZodLiteral<"AMPAS">, z.ZodLiteral<"ANTLR-PD">, z.ZodLiteral<"ANTLR-PD-fallback">, z.ZodLiteral<"Apache-1.0">, z.ZodLiteral<"Apache-1.1">, z.ZodLiteral<"Apache-2.0">, z.ZodLiteral<"APAFML">, z.ZodLiteral<"APL-1.0">, z.ZodLiteral<"App-s2p">, z.ZodLiteral<"APSL-1.0">, z.ZodLiteral<"APSL-1.1">, z.ZodLiteral<"APSL-1.2">, z.ZodLiteral<"APSL-2.0">, z.ZodLiteral<"Arphic-1999">, z.ZodLiteral<"Artistic-1.0">, z.ZodLiteral<"Artistic-1.0-cl8">, z.ZodLiteral<"Artistic-1.0-Perl">, z.ZodLiteral<"Artistic-2.0">, z.ZodLiteral<"ASWF-Digital-Assets-1.0">, z.ZodLiteral<"ASWF-Digital-Assets-1.1">, z.ZodLiteral<"Baekmuk">, z.ZodLiteral<"Bahyph">, z.ZodLiteral<"Barr">, z.ZodLiteral<"bcrypt-Solar-Designer">, z.ZodLiteral<"Beerware">, z.ZodLiteral<"Bitstream-Charter">, z.ZodLiteral<"Bitstream-Vera">, z.ZodLiteral<"BitTorrent-1.0">, z.ZodLiteral<"BitTorrent-1.1">, z.ZodLiteral<"blessing">, z.ZodLiteral<"BlueOak-1.0.0">, z.ZodLiteral<"Boehm-GC">, z.ZodLiteral<"Borceux">, z.ZodLiteral<"Brian-Gladman-2-Clause">, z.ZodLiteral<"Brian-Gladman-3-Clause">, z.ZodLiteral<"BSD-1-Clause">, z.ZodLiteral<"BSD-2-Clause">, z.ZodLiteral<"BSD-2-Clause-Darwin">, z.ZodLiteral<"BSD-2-Clause-Patent">, z.ZodLiteral<"BSD-2-Clause-Views">, z.ZodLiteral<"BSD-3-Clause">, z.ZodLiteral<"BSD-3-Clause-acpica">, z.ZodLiteral<"BSD-3-Clause-Attribution">, z.ZodLiteral<"BSD-3-Clause-Clear">, z.ZodLiteral<"BSD-3-Clause-flex">, z.ZodLiteral<"BSD-3-Clause-HP">, z.ZodLiteral<"BSD-3-Clause-LBNL">, z.ZodLiteral<"BSD-3-Clause-Modification">, z.ZodLiteral<"BSD-3-Clause-No-Military-License">, z.ZodLiteral<"BSD-3-Clause-No-Nuclear-License">, z.ZodLiteral<"BSD-3-Clause-No-Nuclear-License-2014">, z.ZodLiteral<"BSD-3-Clause-No-Nuclear-Warranty">, z.ZodLiteral<"BSD-3-Clause-Open-MPI">, z.ZodLiteral<"BSD-3-Clause-Sun">, z.ZodLiteral<"BSD-4-Clause">, z.ZodLiteral<"BSD-4-Clause-Shortened">, z.ZodLiteral<"BSD-4-Clause-UC">, z.ZodLiteral<"BSD-4.3RENO">, z.ZodLiteral<"BSD-4.3TAHOE">, z.ZodLiteral<"BSD-Advertising-Acknowledgement">, z.ZodLiteral<"BSD-Attribution-HPND-disclaimer">, z.ZodLiteral<"BSD-Inferno-Nettverk">, z.ZodLiteral<"BSD-Protection">, z.ZodLiteral<"BSD-Source-beginning-file">, z.ZodLiteral<"BSD-Source-Code">, z.ZodLiteral<"BSD-Systemics">, z.ZodLiteral<"BSD-Systemics-W3Works">, z.ZodLiteral<"BSL-1.0">, z.ZodLiteral<"BUSL-1.1">, z.ZodLiteral<"bzip2-1.0.6">, z.ZodLiteral<"C-UDA-1.0">, z.ZodLiteral<"CAL-1.0">, z.ZodLiteral<"CAL-1.0-Combined-Work-Exception">, z.ZodLiteral<"Caldera">, z.ZodLiteral<"Caldera-no-preamble">, z.ZodLiteral<"CATOSL-1.1">, z.ZodLiteral<"CC-BY-1.0">, z.ZodLiteral<"CC-BY-2.0">, z.ZodLiteral<"CC-BY-2.5">, z.ZodLiteral<"CC-BY-2.5-AU">, z.ZodLiteral<"CC-BY-3.0">, z.ZodLiteral<"CC-BY-3.0-AT">, z.ZodLiteral<"CC-BY-3.0-AU">, z.ZodLiteral<"CC-BY-3.0-DE">, z.ZodLiteral<"CC-BY-3.0-IGO">, z.ZodLiteral<"CC-BY-3.0-NL">, z.ZodLiteral<"CC-BY-3.0-US">, z.ZodLiteral<"CC-BY-4.0">, z.ZodLiteral<"CC-BY-NC-1.0">, z.ZodLiteral<"CC-BY-NC-2.0">, z.ZodLiteral<"CC-BY-NC-2.5">, z.ZodLiteral<"CC-BY-NC-3.0">, z.ZodLiteral<"CC-BY-NC-3.0-DE">, z.ZodLiteral<"CC-BY-NC-4.0">, z.ZodLiteral<"CC-BY-NC-ND-1.0">, z.ZodLiteral<"CC-BY-NC-ND-2.0">, z.ZodLiteral<"CC-BY-NC-ND-2.5">, z.ZodLiteral<"CC-BY-NC-ND-3.0">, z.ZodLiteral<"CC-BY-NC-ND-3.0-DE">, z.ZodLiteral<"CC-BY-NC-ND-3.0-IGO">, z.ZodLiteral<"CC-BY-NC-ND-4.0">, z.ZodLiteral<"CC-BY-NC-SA-1.0">, z.ZodLiteral<"CC-BY-NC-SA-2.0">, z.ZodLiteral<"CC-BY-NC-SA-2.0-DE">, z.ZodLiteral<"CC-BY-NC-SA-2.0-FR">, z.ZodLiteral<"CC-BY-NC-SA-2.0-UK">, z.ZodLiteral<"CC-BY-NC-SA-2.5">, z.ZodLiteral<"CC-BY-NC-SA-3.0">, z.ZodLiteral<"CC-BY-NC-SA-3.0-DE">, z.ZodLiteral<"CC-BY-NC-SA-3.0-IGO">, z.ZodLiteral<"CC-BY-NC-SA-4.0">, z.ZodLiteral<"CC-BY-ND-1.0">, z.ZodLiteral<"CC-BY-ND-2.0">, z.ZodLiteral<"CC-BY-ND-2.5">, z.ZodLiteral<"CC-BY-ND-3.0">, z.ZodLiteral<"CC-BY-ND-3.0-DE">, z.ZodLiteral<"CC-BY-ND-4.0">, z.ZodLiteral<"CC-BY-SA-1.0">, z.ZodLiteral<"CC-BY-SA-2.0">, z.ZodLiteral<"CC-BY-SA-2.0-UK">, z.ZodLiteral<"CC-BY-SA-2.1-JP">, z.ZodLiteral<"CC-BY-SA-2.5">, z.ZodLiteral<"CC-BY-SA-3.0">, z.ZodLiteral<"CC-BY-SA-3.0-AT">, z.ZodLiteral<"CC-BY-SA-3.0-DE">, z.ZodLiteral<"CC-BY-SA-3.0-IGO">, z.ZodLiteral<"CC-BY-SA-4.0">, z.ZodLiteral<"CC-PDDC">, z.ZodLiteral<"CC0-1.0">, z.ZodLiteral<"CDDL-1.0">, z.ZodLiteral<"CDDL-1.1">, z.ZodLiteral<"CDL-1.0">, z.ZodLiteral<"CDLA-Permissive-1.0">, z.ZodLiteral<"CDLA-Permissive-2.0">, z.ZodLiteral<"CDLA-Sharing-1.0">, z.ZodLiteral<"CECILL-1.0">, z.ZodLiteral<"CECILL-1.1">, z.ZodLiteral<"CECILL-2.0">, z.ZodLiteral<"CECILL-2.1">, z.ZodLiteral<"CECILL-B">, z.ZodLiteral<"CECILL-C">, z.ZodLiteral<"CERN-OHL-1.1">, z.ZodLiteral<"CERN-OHL-1.2">, z.ZodLiteral<"CERN-OHL-P-2.0">, z.ZodLiteral<"CERN-OHL-S-2.0">, z.ZodLiteral<"CERN-OHL-W-2.0">, z.ZodLiteral<"CFITSIO">, z.ZodLiteral<"check-cvs">, z.ZodLiteral<"checkmk">, z.ZodLiteral<"ClArtistic">, z.ZodLiteral<"Clips">, z.ZodLiteral<"CMU-Mach">, z.ZodLiteral<"CMU-Mach-nodoc">, z.ZodLiteral<"CNRI-Jython">, z.ZodLiteral<"CNRI-Python">, z.ZodLiteral<"CNRI-Python-GPL-Compatible">, z.ZodLiteral<"COIL-1.0">, z.ZodLiteral<"Community-Spec-1.0">, z.ZodLiteral<"Condor-1.1">, z.ZodLiteral<"copyleft-next-0.3.0">, z.ZodLiteral<"copyleft-next-0.3.1">, z.ZodLiteral<"Cornell-Lossless-JPEG">, z.ZodLiteral<"CPAL-1.0">, z.ZodLiteral<"CPL-1.0">, z.ZodLiteral<"CPOL-1.02">, z.ZodLiteral<"Cronyx">, z.ZodLiteral<"Crossword">, z.ZodLiteral<"CrystalStacker">, z.ZodLiteral<"CUA-OPL-1.0">, z.ZodLiteral<"Cube">, z.ZodLiteral<"curl">, z.ZodLiteral<"D-FSL-1.0">, z.ZodLiteral<"DEC-3-Clause">, z.ZodLiteral<"diffmark">, z.ZodLiteral<"DL-DE-BY-2.0">, z.ZodLiteral<"DL-DE-ZERO-2.0">, z.ZodLiteral<"DOC">, z.ZodLiteral<"Dotseqn">, z.ZodLiteral<"DRL-1.0">, z.ZodLiteral<"DRL-1.1">, z.ZodLiteral<"DSDP">, z.ZodLiteral<"dtoa">, z.ZodLiteral<"dvipdfm">, z.ZodLiteral<"ECL-1.0">, z.ZodLiteral<"ECL-2.0">, z.ZodLiteral<"EFL-1.0">, z.ZodLiteral<"EFL-2.0">, z.ZodLiteral<"eGenix">, z.ZodLiteral<"Elastic-2.0">, z.ZodLiteral<"Entessa">, z.ZodLiteral<"EPICS">, z.ZodLiteral<"EPL-1.0">, z.ZodLiteral<"EPL-2.0">, z.ZodLiteral<"ErlPL-1.1">, z.ZodLiteral<"etalab-2.0">, z.ZodLiteral<"EUDatagrid">, z.ZodLiteral<"EUPL-1.0">, z.ZodLiteral<"EUPL-1.1">, z.ZodLiteral<"EUPL-1.2">, z.ZodLiteral<"Eurosym">, z.ZodLiteral<"Fair">, z.ZodLiteral<"FBM">, z.ZodLiteral<"FDK-AAC">, z.ZodLiteral<"Ferguson-Twofish">, z.ZodLiteral<"Frameworx-1.0">, z.ZodLiteral<"FreeBSD-DOC">, z.ZodLiteral<"FreeImage">, z.ZodLiteral<"FSFAP">, z.ZodLiteral<"FSFAP-no-warranty-disclaimer">, z.ZodLiteral<"FSFUL">, z.ZodLiteral<"FSFULLR">, z.ZodLiteral<"FSFULLRWD">, z.ZodLiteral<"FTL">, z.ZodLiteral<"Furuseth">, z.ZodLiteral<"fwlw">, z.ZodLiteral<"GCR-docs">, z.ZodLiteral<"GD">, z.ZodLiteral<"GFDL-1.1-invariants-only">, z.ZodLiteral<"GFDL-1.1-invariants-or-later">, z.ZodLiteral<"GFDL-1.1-no-invariants-only">, z.ZodLiteral<"GFDL-1.1-no-invariants-or-later">, z.ZodLiteral<"GFDL-1.1-only">, z.ZodLiteral<"GFDL-1.1-or-later">, z.ZodLiteral<"GFDL-1.2-invariants-only">, z.ZodLiteral<"GFDL-1.2-invariants-or-later">, z.ZodLiteral<"GFDL-1.2-no-invariants-only">, z.ZodLiteral<"GFDL-1.2-no-invariants-or-later">, z.ZodLiteral<"GFDL-1.2-only">, z.ZodLiteral<"GFDL-1.2-or-later">, z.ZodLiteral<"GFDL-1.3-invariants-only">, z.ZodLiteral<"GFDL-1.3-invariants-or-later">, z.ZodLiteral<"GFDL-1.3-no-invariants-only">, z.ZodLiteral<"GFDL-1.3-no-invariants-or-later">, z.ZodLiteral<"GFDL-1.3-only">, z.ZodLiteral<"GFDL-1.3-or-later">, z.ZodLiteral<"Giftware">, z.ZodLiteral<"GL2PS">, z.ZodLiteral<"Glide">, z.ZodLiteral<"Glulxe">, z.ZodLiteral<"GLWTPL">, z.ZodLiteral<"gnuplot">, z.ZodLiteral<"GPL-1.0-only">, z.ZodLiteral<"GPL-1.0-or-later">, z.ZodLiteral<"GPL-2.0-only">, z.ZodLiteral<"GPL-2.0-or-later">, z.ZodLiteral<"GPL-3.0-only">, z.ZodLiteral<"GPL-3.0-or-later">, z.ZodLiteral<"Graphics-Gems">, z.ZodLiteral<"gSOAP-1.3b">, z.ZodLiteral<"gtkbook">, z.ZodLiteral<"HaskellReport">, z.ZodLiteral<"hdparm">, z.ZodLiteral<"Hippocratic-2.1">, z.ZodLiteral<"HP-1986">, z.ZodLiteral<"HP-1989">, z.ZodLiteral<"HPND">, z.ZodLiteral<"HPND-DEC">, z.ZodLiteral<"HPND-doc">, z.ZodLiteral<"HPND-doc-sell">, z.ZodLiteral<"HPND-export-US">, z.ZodLiteral<"HPND-export-US-modify">, z.ZodLiteral<"HPND-Fenneberg-Livingston">, z.ZodLiteral<"HPND-INRIA-IMAG">, z.ZodLiteral<"HPND-Kevlin-Henney">, z.ZodLiteral<"HPND-Markus-Kuhn">, z.ZodLiteral<"HPND-MIT-disclaimer">, z.ZodLiteral<"HPND-Pbmplus">, z.ZodLiteral<"HPND-sell-MIT-disclaimer-xserver">, z.ZodLiteral<"HPND-sell-regexpr">, z.ZodLiteral<"HPND-sell-variant">, z.ZodLiteral<"HPND-sell-variant-MIT-disclaimer">, z.ZodLiteral<"HPND-UC">, z.ZodLiteral<"HTMLTIDY">, z.ZodLiteral<"IBM-pibs">, z.ZodLiteral<"ICU">, z.ZodLiteral<"IEC-Code-Components-EULA">, z.ZodLiteral<"IJG">, z.ZodLiteral<"IJG-short">, z.ZodLiteral<"iMatix">, z.ZodLiteral<"Imlib2">, z.ZodLiteral<"Info-ZIP">, z.ZodLiteral<"Inner-Net-2.0">, z.ZodLiteral<"Intel">, z.ZodLiteral<"Intel-ACPI">, z.ZodLiteral<"Interbase-1.0">, z.ZodLiteral<"IPA">, z.ZodLiteral<"IPL-1.0">, z.ZodLiteral<"ISC">, z.ZodLiteral<"ISC-Veillard">, z.ZodLiteral<"Jam">, z.ZodLiteral<"JasPer-2.0">, z.ZodLiteral<"JPL-image">, z.ZodLiteral<"JPNIC">, z.ZodLiteral<"JSON">, z.ZodLiteral<"Kastrup">, z.ZodLiteral<"Kazlib">, z.ZodLiteral<"Knuth-CTAN">, z.ZodLiteral<"LAL-1.2">, z.ZodLiteral<"LAL-1.3">, z.ZodLiteral<"Latex2e">, z.ZodLiteral<"Latex2e-translated-notice">, z.ZodLiteral<"Leptonica">, z.ZodLiteral<"LGPL-2.0-only">, z.ZodLiteral<"LGPL-2.0-or-later">, z.ZodLiteral<"LGPL-2.1-only">, z.ZodLiteral<"LGPL-2.1-or-later">, z.ZodLiteral<"LGPL-3.0-only">, z.ZodLiteral<"LGPL-3.0-or-later">, z.ZodLiteral<"LGPLLR">, z.ZodLiteral<"Libpng">, z.ZodLiteral<"libpng-2.0">, z.ZodLiteral<"libselinux-1.0">, z.ZodLiteral<"libtiff">, z.ZodLiteral<"libutil-David-Nugent">, z.ZodLiteral<"LiLiQ-P-1.1">, z.ZodLiteral<"LiLiQ-R-1.1">, z.ZodLiteral<"LiLiQ-Rplus-1.1">, z.ZodLiteral<"Linux-man-pages-1-para">, z.ZodLiteral<"Linux-man-pages-copyleft">, z.ZodLiteral<"Linux-man-pages-copyleft-2-para">, z.ZodLiteral<"Linux-man-pages-copyleft-var">, z.ZodLiteral<"Linux-OpenIB">, z.ZodLiteral<"LOOP">, z.ZodLiteral<"LPD-document">, z.ZodLiteral<"LPL-1.0">, z.ZodLiteral<"LPL-1.02">, z.ZodLiteral<"LPPL-1.0">, z.ZodLiteral<"LPPL-1.1">, z.ZodLiteral<"LPPL-1.2">, z.ZodLiteral<"LPPL-1.3a">, z.ZodLiteral<"LPPL-1.3c">, z.ZodLiteral<"lsof">, z.ZodLiteral<"Lucida-Bitmap-Fonts">, z.ZodLiteral<"LZMA-SDK-9.11-to-9.20">, z.ZodLiteral<"LZMA-SDK-9.22">, z.ZodLiteral<"Mackerras-3-Clause">, z.ZodLiteral<"Mackerras-3-Clause-acknowledgment">, z.ZodLiteral<"magaz">, z.ZodLiteral<"mailprio">, z.ZodLiteral<"MakeIndex">, z.ZodLiteral<"Martin-Birgmeier">, z.ZodLiteral<"McPhee-slideshow">, z.ZodLiteral<"metamail">, z.ZodLiteral<"Minpack">, z.ZodLiteral<"MirOS">, z.ZodLiteral<"MIT">, z.ZodLiteral<"MIT-0">, z.ZodLiteral<"MIT-advertising">, z.ZodLiteral<"MIT-CMU">, z.ZodLiteral<"MIT-enna">, z.ZodLiteral<"MIT-feh">, z.ZodLiteral<"MIT-Festival">, z.ZodLiteral<"MIT-Modern-Variant">, z.ZodLiteral<"MIT-open-group">, z.ZodLiteral<"MIT-testregex">, z.ZodLiteral<"MIT-Wu">, z.ZodLiteral<"MITNFA">, z.ZodLiteral<"MMIXware">, z.ZodLiteral<"Motosoto">, z.ZodLiteral<"MPEG-SSG">, z.ZodLiteral<"mpi-permissive">, z.ZodLiteral<"mpich2">, z.ZodLiteral<"MPL-1.0">, z.ZodLiteral<"MPL-1.1">, z.ZodLiteral<"MPL-2.0">, z.ZodLiteral<"MPL-2.0-no-copyleft-exception">, z.ZodLiteral<"mplus">, z.ZodLiteral<"MS-LPL">, z.ZodLiteral<"MS-PL">, z.ZodLiteral<"MS-RL">, z.ZodLiteral<"MTLL">, z.ZodLiteral<"MulanPSL-1.0">, z.ZodLiteral<"MulanPSL-2.0">, z.ZodLiteral<"Multics">, z.ZodLiteral<"Mup">, z.ZodLiteral<"NAIST-2003">, z.ZodLiteral<"NASA-1.3">, z.ZodLiteral<"Naumen">, z.ZodLiteral<"NBPL-1.0">, z.ZodLiteral<"NCGL-UK-2.0">, z.ZodLiteral<"NCSA">, z.ZodLiteral<"Net-SNMP">, z.ZodLiteral<"NetCDF">, z.ZodLiteral<"Newsletr">, z.ZodLiteral<"NGPL">, z.ZodLiteral<"NICTA-1.0">, z.ZodLiteral<"NIST-PD">, z.ZodLiteral<"NIST-PD-fallback">, z.ZodLiteral<"NIST-Software">, z.ZodLiteral<"NLOD-1.0">, z.ZodLiteral<"NLOD-2.0">, z.ZodLiteral<"NLPL">, z.ZodLiteral<"Nokia">, z.ZodLiteral<"NOSL">, z.ZodLiteral<"Noweb">, z.ZodLiteral<"NPL-1.0">, z.ZodLiteral<"NPL-1.1">, z.ZodLiteral<"NPOSL-3.0">, z.ZodLiteral<"NRL">, z.ZodLiteral<"NTP">, z.ZodLiteral<"NTP-0">, z.ZodLiteral<"O-UDA-1.0">, z.ZodLiteral<"OCCT-PL">, z.ZodLiteral<"OCLC-2.0">, z.ZodLiteral<"ODbL-1.0">, z.ZodLiteral<"ODC-By-1.0">, z.ZodLiteral<"OFFIS">, z.ZodLiteral<"OFL-1.0">, z.ZodLiteral<"OFL-1.0-no-RFN">, z.ZodLiteral<"OFL-1.0-RFN">, z.ZodLiteral<"OFL-1.1">, z.ZodLiteral<"OFL-1.1-no-RFN">, z.ZodLiteral<"OFL-1.1-RFN">, z.ZodLiteral<"OGC-1.0">, z.ZodLiteral<"OGDL-Taiwan-1.0">, z.ZodLiteral<"OGL-Canada-2.0">, z.ZodLiteral<"OGL-UK-1.0">, z.ZodLiteral<"OGL-UK-2.0">, z.ZodLiteral<"OGL-UK-3.0">, z.ZodLiteral<"OGTSL">, z.ZodLiteral<"OLDAP-1.1">, z.ZodLiteral<"OLDAP-1.2">, z.ZodLiteral<"OLDAP-1.3">, z.ZodLiteral<"OLDAP-1.4">, z.ZodLiteral<"OLDAP-2.0">, z.ZodLiteral<"OLDAP-2.0.1">, z.ZodLiteral<"OLDAP-2.1">, z.ZodLiteral<"OLDAP-2.2">, z.ZodLiteral<"OLDAP-2.2.1">, z.ZodLiteral<"OLDAP-2.2.2">, z.ZodLiteral<"OLDAP-2.3">, z.ZodLiteral<"OLDAP-2.4">, z.ZodLiteral<"OLDAP-2.5">, z.ZodLiteral<"OLDAP-2.6">, z.ZodLiteral<"OLDAP-2.7">, z.ZodLiteral<"OLDAP-2.8">, z.ZodLiteral<"OLFL-1.3">, z.ZodLiteral<"OML">, z.ZodLiteral<"OpenPBS-2.3">, z.ZodLiteral<"OpenSSL">, z.ZodLiteral<"OpenSSL-standalone">, z.ZodLiteral<"OpenVision">, z.ZodLiteral<"OPL-1.0">, z.ZodLiteral<"OPL-UK-3.0">, z.ZodLiteral<"OPUBL-1.0">, z.ZodLiteral<"OSET-PL-2.1">, z.ZodLiteral<"OSL-1.0">, z.ZodLiteral<"OSL-1.1">, z.ZodLiteral<"OSL-2.0">, z.ZodLiteral<"OSL-2.1">, z.ZodLiteral<"OSL-3.0">, z.ZodLiteral<"PADL">, z.ZodLiteral<"Parity-6.0.0">, z.ZodLiteral<"Parity-7.0.0">, z.ZodLiteral<"PDDL-1.0">, z.ZodLiteral<"PHP-3.0">, z.ZodLiteral<"PHP-3.01">, z.ZodLiteral<"Pixar">, z.ZodLiteral<"Plexus">, z.ZodLiteral<"pnmstitch">, z.ZodLiteral<"PolyForm-Noncommercial-1.0.0">, z.ZodLiteral<"PolyForm-Small-Business-1.0.0">, z.ZodLiteral<"PostgreSQL">, z.ZodLiteral<"PSF-2.0">, z.ZodLiteral<"psfrag">, z.ZodLiteral<"psutils">, z.ZodLiteral<"Python-2.0">, z.ZodLiteral<"Python-2.0.1">, z.ZodLiteral<"python-ldap">, z.ZodLiteral<"Qhull">, z.ZodLiteral<"QPL-1.0">, z.ZodLiteral<"QPL-1.0-INRIA-2004">, z.ZodLiteral<"radvd">, z.ZodLiteral<"Rdisc">, z.ZodLiteral<"RHeCos-1.1">, z.ZodLiteral<"RPL-1.1">, z.ZodLiteral<"RPL-1.5">, z.ZodLiteral<"RPSL-1.0">, z.ZodLiteral<"RSA-MD">, z.ZodLiteral<"RSCPL">, z.ZodLiteral<"Ruby">, z.ZodLiteral<"SAX-PD">, z.ZodLiteral<"SAX-PD-2.0">, z.ZodLiteral<"Saxpath">, z.ZodLiteral<"SCEA">, z.ZodLiteral<"SchemeReport">, z.ZodLiteral<"Sendmail">, z.ZodLiteral<"Sendmail-8.23">, z.ZodLiteral<"SGI-B-1.0">, z.ZodLiteral<"SGI-B-1.1">, z.ZodLiteral<"SGI-B-2.0">, z.ZodLiteral<"SGI-OpenGL">, z.ZodLiteral<"SGP4">, z.ZodLiteral<"SHL-0.5">, z.ZodLiteral<"SHL-0.51">, z.ZodLiteral<"SimPL-2.0">, z.ZodLiteral<"SISSL">, z.ZodLiteral<"SISSL-1.2">, z.ZodLiteral<"SL">, z.ZodLiteral<"Sleepycat">, z.ZodLiteral<"SMLNJ">, z.ZodLiteral<"SMPPL">, z.ZodLiteral<"SNIA">, z.ZodLiteral<"snprintf">, z.ZodLiteral<"softSurfer">, z.ZodLiteral<"Soundex">, z.ZodLiteral<"Spencer-86">, z.ZodLiteral<"Spencer-94">, z.ZodLiteral<"Spencer-99">, z.ZodLiteral<"SPL-1.0">, z.ZodLiteral<"ssh-keyscan">, z.ZodLiteral<"SSH-OpenSSH">, z.ZodLiteral<"SSH-short">, z.ZodLiteral<"SSLeay-standalone">, z.ZodLiteral<"SSPL-1.0">, z.ZodLiteral<"SugarCRM-1.1.3">, z.ZodLiteral<"Sun-PPP">, z.ZodLiteral<"SunPro">, z.ZodLiteral<"SWL">, z.ZodLiteral<"swrule">, z.ZodLiteral<"Symlinks">, z.ZodLiteral<"TAPR-OHL-1.0">, z.ZodLiteral<"TCL">, z.ZodLiteral<"TCP-wrappers">, z.ZodLiteral<"TermReadKey">, z.ZodLiteral<"TGPPL-1.0">, z.ZodLiteral<"TMate">, z.ZodLiteral<"TORQUE-1.1">, z.ZodLiteral<"TOSL">, z.ZodLiteral<"TPDL">, z.ZodLiteral<"TPL-1.0">, z.ZodLiteral<"TTWL">, z.ZodLiteral<"TTYP0">, z.ZodLiteral<"TU-Berlin-1.0">, z.ZodLiteral<"TU-Berlin-2.0">, z.ZodLiteral<"UCAR">, z.ZodLiteral<"UCL-1.0">, z.ZodLiteral<"ulem">, z.ZodLiteral<"UMich-Merit">, z.ZodLiteral<"Unicode-3.0">, z.ZodLiteral<"Unicode-DFS-2015">, z.ZodLiteral<"Unicode-DFS-2016">, z.ZodLiteral<"Unicode-TOU">, z.ZodLiteral<"UnixCrypt">, z.ZodLiteral<"Unlicense">, z.ZodLiteral<"UPL-1.0">, z.ZodLiteral<"URT-RLE">, z.ZodLiteral<"Vim">, z.ZodLiteral<"VOSTROM">, z.ZodLiteral<"VSL-1.0">, z.ZodLiteral<"W3C">, z.ZodLiteral<"W3C-19980720">, z.ZodLiteral<"W3C-20150513">, z.ZodLiteral<"w3m">, z.ZodLiteral<"Watcom-1.0">, z.ZodLiteral<"Widget-Workshop">, z.ZodLiteral<"Wsuipa">, z.ZodLiteral<"WTFPL">, z.ZodLiteral<"X11">, z.ZodLiteral<"X11-distribute-modifications-variant">, z.ZodLiteral<"Xdebug-1.03">, z.ZodLiteral<"Xerox">, z.ZodLiteral<"Xfig">, z.ZodLiteral<"XFree86-1.1">, z.ZodLiteral<"xinetd">, z.ZodLiteral<"xkeyboard-config-Zinoviev">, z.ZodLiteral<"xlock">, z.ZodLiteral<"Xnet">, z.ZodLiteral<"xpp">, z.ZodLiteral<"XSkat">, z.ZodLiteral<"YPL-1.0">, z.ZodLiteral<"YPL-1.1">, z.ZodLiteral<"Zed">, z.ZodLiteral<"Zeeff">, z.ZodLiteral<"Zend-2.0">, z.ZodLiteral<"Zimbra-1.3">, z.ZodLiteral<"Zimbra-1.4">, z.ZodLiteral<"Zlib">, z.ZodLiteral<"zlib-acknowledgement">, z.ZodLiteral<"ZPL-1.1">, z.ZodLiteral<"ZPL-2.0">, z.ZodLiteral<"ZPL-2.1">, z.ZodString]>>;
    people: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        name: z.ZodString;
        email: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        email?: string | undefined;
    }, {
        name: string;
        url?: string | undefined;
        email?: string | undefined;
    }>, z.ZodObject<{
        author: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        author: string;
    }, {
        author: string;
    }>]>>;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    files: string[];
    keywords: string[];
    version: string;
    dependencies: Record<string, string>;
    packageManager: string;
    license: string;
    type?: string | undefined;
    cpu?: string[] | undefined;
    main?: string | undefined;
    description?: string | undefined;
    scripts?: Record<string, string> | undefined;
    exports?: Record<string, string | {
        import?: string | undefined;
        types?: string | undefined;
        require?: string | undefined;
    }> | undefined;
    devDependencies?: Record<string, string> | undefined;
    peerDependencies?: Record<string, string> | undefined;
    peerDependenciesMeta?: any;
    optionalDependencies?: Record<string, string> | undefined;
    bundleDependencies?: Record<string, string> | undefined;
    private?: boolean | undefined;
    os?: string[] | undefined;
    workspaces?: string[] | undefined;
    funding?: {
        type: "patreon" | "individual";
        url: string;
    } | undefined;
    bin?: string | undefined;
    man?: string | string[] | undefined;
    homepage?: string | undefined;
    people?: {
        name: string;
        url?: string | undefined;
        email?: string | undefined;
    } | {
        author: string;
    } | undefined;
}, {
    name: string;
    dependencies: Record<string, string>;
    type?: string | undefined;
    cpu?: string[] | undefined;
    files?: string[] | undefined;
    main?: string | undefined;
    description?: string | undefined;
    keywords?: string[] | undefined;
    scripts?: Record<string, string> | undefined;
    version?: string | undefined;
    exports?: Record<string, string | {
        import?: string | undefined;
        types?: string | undefined;
        require?: string | undefined;
    }> | undefined;
    packageManager?: string | undefined;
    devDependencies?: Record<string, string> | undefined;
    peerDependencies?: Record<string, string> | undefined;
    peerDependenciesMeta?: any;
    optionalDependencies?: Record<string, string> | undefined;
    bundleDependencies?: Record<string, string> | undefined;
    private?: boolean | undefined;
    os?: string[] | undefined;
    workspaces?: string[] | undefined;
    funding?: {
        type: "patreon" | "individual";
        url: string;
    } | undefined;
    bin?: string | undefined;
    man?: string | string[] | undefined;
    homepage?: string | undefined;
    license?: string | undefined;
    people?: {
        name: string;
        url?: string | undefined;
        email?: string | undefined;
    } | {
        author: string;
    } | undefined;
}>;
export type PackageJsonType = z.input<typeof ulldCompletePackageJsonSchema>;
//# sourceMappingURL=packageJsonType.d.ts.map