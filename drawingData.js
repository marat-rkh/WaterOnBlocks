var drawingData = {
    generateCubeVertices : function(width, height) {
        return [
            // Front face
            0,     0,      width,
            width, 0,      width,
            width, height, width,
            0,     height, width,

            // Back face
            0,     0,      0,
            0,     height, 0,
            width, height, 0,
            width, 0,      0,

            // Top face
            0,     height, 0,
            0,     height, width,
            width, height, width,
            width, height, 0,

            // Bottom face
            0,     0, 0,
            width, 0, 0,
            width, 0, width,
            0,     0, width,

            // Right face
            width, 0,      0,
            width, height, 0,
            width, height, width,
            width, 0,      width,

            // Left face
            0, 0,      0,
            0, 0,      width,
            0, height, width,
            0, height, 0,
        ];
    },

    CUBE_VERTICES_ITEM_SIZE : 3,
    CUBE_VERTICES_NUM_OF_ITEMS : 24,

    TEXTURE_COORDS : [
        // Front face
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,

        // Back face
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
        0.0, 0.0,

        // Top face
        0.0, 1.0,
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,

        // Bottom face
        1.0, 1.0,
        0.0, 1.0,
        0.0, 0.0,
        1.0, 0.0,

        // Right face
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
        0.0, 0.0,

        // Left face
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
    ],

    CUBE_TEX_COORDS_ITEM_SIZE : 2,
    CUBE_TEX_COORDS_NUM_OF_ITEMS : 24,

    CUBE_VERTEX_INDICES : [
        0, 1, 2,      0, 2, 3,    // Front face
        4, 5, 6,      4, 6, 7,    // Back face
        8, 9, 10,     8, 10, 11,  // Top face
        12, 13, 14,   12, 14, 15, // Bottom face
        16, 17, 18,   16, 18, 19, // Right face
        20, 21, 22,   20, 22, 23  // Left face
    ],

    CUBE_VERTEX_INDICES_ITEM_SIZE : 1,
    CUBE_VERTEX_INDICES_NUM_OF_ITEMS : 36
};