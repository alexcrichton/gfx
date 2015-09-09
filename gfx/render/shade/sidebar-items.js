initSidebarItems({"enum":[["ParameterError","An error type on either the parameter storage or the program side"]],"struct":[["NamedCell","A named cell containing arbitrary value"],["ParamDictionary","A dictionary of parameters, meant to be shared between different programs"],["ParamDictionaryLink","Redirects program input to the relevant ParamDictionary cell"]],"trait":[["Parameter","General shader parameter."],["ShaderParam","Abstracts the shader parameter structure, generated by the `shader_param` attribute"]],"type":[["ParameterId","Parameter index."],["TextureParam","A texture parameter: consists of a texture handle with an optional sampler. Not all textures need a sampler (i.e. MSAA ones do not). Optimally, we'd want to encode this logic into the type system (TODO)."]]});