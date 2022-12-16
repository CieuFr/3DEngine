#version 450

out vec4 fragColor;

layout (binding = 0) uniform sampler2D depthMap;


void main()
{
	ivec2 texCoords = ivec2(gl_FragCoord.xy);
	float depth = texelFetch(depthMap,ivec2(texCoords),0).z;
	fragColor = vec4(vec3(depth),1);

}
